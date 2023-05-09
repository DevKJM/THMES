DevExpress.ui.dxOverlay.baseZIndex(3000);

// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function (predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            
            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }

            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];

            // 5. Let k be 0.
            var k = 0;

            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).getLocalzebraBrowserdevices
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return kValue.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }
                // e. Increase k by 1.
                k++;
            }

            // 7. Return undefined.
            return undefined;
        }
    });
}

var formatMessage = Globalize.formatMessage.bind(Globalize);

var USE_YN = [{
    "CODE": 'Y',
    "NAME": formatMessage('Yes') //"네"//
}, {
    "CODE": 'N',
    "NAME": formatMessage('No') // "아니오" //
    }];

var globalProcessCode;
var globalEquipmentCode;
var globalWorkcenterCode;
var globalNotificationErrorTime = 5000;
var globalNotificationWarningTime = 5000;
var globalNotificationInfoTime = 5000;
var globalNotificationSuccessTime = 5000;

var singleKeyStore = new DevExpress.data.LocalStore({
    key: "id",
    name: "settings"
});

singleKeyStore.load()
.done(function (data) {
    if (data.length != 0) {
        var processCode = data.find(function (element) {
            return element.id == 'PROCESSCODE';
        });

        var equipmentCode = data.find(function (element) {
            return element.id == 'EQUIPMENTCODE';
        });

        var errorTime = data.find(function (element) {
            return element.id == 'ERRORTIME';
        });

        var warningTime = data.find(function (element) {
            return element.id == 'WARNINGTIME';
        });

        var infoTime = data.find(function (element) {
            return element.id == 'INFOTIME';
        });

        var successTime = data.find(function (element) {
            return element.id == 'SUCCESSTIME';
        });

        var workcenterCode = data.find(function (element) {
            return element.id == 'WORKCENTERCODE';
        });

        if (processCode != undefined) {
            globalProcessCode = processCode.name;
        } else {
            globalProcessCode  = null;
        }

        if (equipmentCode != undefined) {
            globalEquipmentCode = equipmentCode.name;
        } else {
            globalEquipmentCode  = null;
        }

        if (workcenterCode != undefined) {
            globalWorkcenterCode = workcenterCode.name;
        } else {
            globalWorkcenterCode = null;
        }
        
        globalNotificationErrorTime = errorTime == null ? 5000 : errorTime;
        globalNotificationWarningTime = warningTime == null ? 5000 : warningTime;
        globalNotificationInfoTime = infoTime == null ? 5000 : infoTime;
        globalNotificationSuccessTime = successTime == null ? 5000 : successTime;

    }
})
.fail(function (error) {
    //console.log(error);
});

$(function () {
    if (Cookies.get("useZebraPrinter") == "true") {
        zebraBrowserPrintSetup();
    }
});

function getExportFileName(grid, fullScreenName, prefixName) {
    //console.log(grid);
    if (prefixName == '')
    return Globalize.dateFormatter({ datetime: "short" })(new Date()) + fullScreenName;
        else
    return Globalize.dateFormatter({ datetime: "short" })(new Date()) + fullScreenName + '_' + prefixName;
}

function userCustomGrid(e) {
    var grid = e.component;
    
    if (Cookies.get("globalInputMode") == "true") {
        grid.option('editing.mode', 'form');
    } else {
        grid.option('editing.mode', 'batch');
    }

    var canfelFiled = grid.option('CANCEL_FIELD');
    var ignoreAutoWidth = grid.option('IGNORE_AUTOWIDTH');

    if (canfelFiled == undefined) {
        canfelFiled = [];
        canfelFiled.push('USEYN');
        canfelFiled.push('N');
        grid.option('CANCEL_FIELD', canfelFiled);
    }

    userCustomCommonFieldBind(e);
    userCustomCommonRequiredHeader(e);

    var editing = grid.option('editing');
    var DELETE_IGNORE = grid.option('DELETE_IGNORE');

    if (DELETE_IGNORE != true) {
        //if ((editing != undefined && editing.allowDeleting == true) || editing.mode == "form") {
        //    editing.allowDeleting = function (e) {
        //        if (e.row.key.length == undefined) {
        //            return true;
        //        } else {
        //            return false;
        //        }
        //    };
        //}

        //삭제버튼이 생성될 때, Row Key의 유무를 확인한다. (없으면 삭제버튼 생성 O. 있으면 삭제버튼 생성 X)
        // Key가 GUID일 때, 숫자일 때, 데이터타입이 다르다. 
        if ((editing != undefined && editing.allowDeleting == true) || editing.mode == "form") {
            editing.allowDeleting = function (e) {
                if (typeof (e.row.key) == "number") {
                    if (e.row.key.rowIndex == undefined) {
                        return false;
                    } else {
                        return true;
                    }
                }
                else {
                    if (e.row.key.length == undefined) {
                        return true;
                    } else {
                        return false;
                    }
                }
            };
        }
    }
    
    grid.option("updating", false);

    grid.on("initNewRow", userCustomInitNewRow);
    grid.on("editingStart", userCustomEditingStart);
    grid.on("cellPrepared", userCustomCellPrepared);
    grid.on("contentReady", userCustomContentReady);
    grid.on("editorPreparing", userCustomEditorPreparing);
    grid.on("rowValidating", userCustomRowValidating);

    grid.on("rowUpdating", userCustomRowUpdating);
    grid.on("rowRemoving", userCustomRowRemoving);
    grid.on("rowInserting", userCustomRowInserting);

    if (ignoreAutoWidth == undefined && ignoreAutoWidth != true) {
        setColumnAutoWidth(e);
    }
}

function userCustomRowUpdating(e) {
    var updating = e.component.option("updating");

    if (!updating)
        e.component.option("updating", true);
}

function userCustomRowRemoving(e) {
    var updating = e.component.option("updating");

    if (!updating)
        e.component.option("updating", true);
}

function userCustomRowInserting(e) {
    var updating = e.component.option("updating");

    if (!updating)
        e.component.option("updating", true);
}

function userCustomRowValidating(e) {
    showValidationMessage(e);
}

function showValidationMessage(e) {
    var totalMessage = '';

    e.brokenRules.forEach(function (e) {
        totalMessage = totalMessage + e.message;
    });

    if (totalMessage != '')
        DevExpress.ui.notify(totalMessage, 'error', globalNotificationErrorTime);
}

function setColumnAutoWidth(e) {

    var columnWidth;
    var colcount = e.component.columnCount();
    var data = e.component.option("columns");
    var MaxColWidth = 0;
    var MaxColumn = 0;
    var ColWidth = 0;

    for (var colIndex = 0; colIndex < colcount; colIndex++) {

        try {
            if (data[colIndex].constructor.name === "String") {
                columnWidth = formatMessage("W_" + data[colIndex]);
            }
            else {
                columnWidth = formatMessage("W_" + data[colIndex].dataField);
            }

            ColWidth = columnWidth;

            if (Number(ColWidth) >= MaxColWidth) {
                MaxColumn = colIndex;
                MaxColWidth = Number(ColWidth);
            }

        } catch (err) {
            columnWidth = -1;
        }

        if (columnWidth != undefined) {            
            if (e.component.columnOption(data[colIndex].dataField, "width") == undefined)
            {
                if (columnWidth == -1) {
                    e.component.columnOption(data[colIndex].dataField, "width", undefined);
                } else {
                    e.component.columnOption(data[colIndex].dataField, "width", Number(columnWidth));
                }
            }            
        } else {
            e.component.columnOption(data[colIndex].dataField, "width", 100);
        }
    }

    //스크립트에 설정된 칼럼 길이를 적용하기 위해 주석처리.
    //if (data != undefined && data[MaxColumn] != undefined) {
    //    e.component.columnOption(data[MaxColumn].dataField, "width", undefined);
    //    e.component.option('width', null);
    //}
}

function setColumnAutoWidthbyScreen(e) {

    //var data = e.component.option("columns");
    //var MaxColumn = 0;

    ////스크립트에 설정된 칼럼 길이를 적용하기 위해 주석처리.
    //if (data != undefined && data[MaxColumn] != undefined) {
    //    e.component.columnOption(data[MaxColumn].dataField, "width", undefined);
    //    e.component.option('width', null);
    //}

    var colcount = e.component.columnCount();
    var data = e.component.option("columns");
    var MaxColumn = 0;

    for (var colIndex = 0; colIndex < colcount; colIndex++) {
        //스크립트에 설정된 칼럼 길이를 적용하기 위해 주석처리.
        if (data != undefined && data[MaxColumn] != undefined) {
            e.component.columnOption(data[MaxColumn].dataField, "width", undefined);
            e.component.option('width', null);
        }
    }
}

function userCustomCommonRequiredHeader(e) {
    var grid = e.component;
    var useRequired = grid.option('USE_REQUIRED_HEADER');

    if (useRequired == true) {
        var keyFiled = grid.option('KEY_FIELD');

        var columns = grid.getVisibleColumns();

        columns.forEach(function (o) {
            var findColumn = keyFiled.find(function (e) {
                return e == o.dataField;
            });

            if (!findColumn) {
                var validationRule = o.validationRules;

                if (validationRule != undefined) {
                    var result = validationRule.find(function (p) {
                        return p.type == 'required';
                    });

                    if (result) {
                        grid.columnOption(o.dataField, 'cssClass', 'dx-custom-required-header');
                    } else {
                        grid.columnOption(o.dataField, 'cssClass', 'dx-custom-input-header');
                    }
                }
                else {
                    grid.columnOption(o.dataField, 'cssClass', 'dx-custom-input-header');
                }
            }
        });
    }
}

function userCustomCommonFieldBind(e) {
    var grid = e.component;

    grid.columnOption('CREATEDATE', 'allowEditing', false);

    if (grid.columnOption('CREATEDATE', 'format') == undefined)
        grid.columnOption('CREATEDATE', 'format', 'shortDateShortTime');

    grid.columnOption('CREATEUSER', 'allowEditing', false);

    if (grid.columnOption('CREATEDATE', 'format') == undefined)
        grid.columnOption('RECENTDATE', 'format', 'shortDateShortTime');

    grid.columnOption('RECENTDATE', 'allowEditing', false);
    grid.columnOption('RECENTUSER', 'allowEditing', false);

    /* USE YN 바인드 */
    var lookupUseYN = {
        dataSource: USE_YN,
        valueExpr: "CODE",
        displayExpr: "NAME"
    };

    grid.columnOption('USEYN', 'lookup', lookupUseYN);

    /* 생성자 수정자 바인드*/
    var lookupUser = {
        dataSource: function (options) {
            return {
                store: DevExpress.data.AspNet.createStore({
                    key: "EMPCODE",
                    loadUrl: rootURL + "api/COMA001WebApi/HR_LIST",
                    loadParams: { culture: locale },
                    filter: null
                }),
            };
        },
        valueExpr: "EMPCODE",
        displayExpr: "EMPNAME"
    };

    grid.columnOption('CREATEUSER', 'lookup', lookupUser);
    grid.columnOption('RECENTUSER', 'lookup', lookupUser);
}

function userCustomEditorInitialized(e) {
    
}

function userCustomInitNewRow(e) {
    //console.log('userCustomInitNewRow');
    if (e != undefined && e.component != undefined) {
        var visibleColumns = e.component.getVisibleColumns();
        var initField = e.component.option('INIT_FIELD');

        if (initField != undefined) {
            for (fieldIndex = 0; initField.length > fieldIndex; fieldIndex++) {
                visibleColumns.forEach(function (o) {
                    /* 에디터 허용 && 그리드 Option에 추가된 필드 && 컬럼에 룩업 적용 된 경우*/
                    if (o.allowEditing == true && o.dataField == initField[fieldIndex] && o.lookup != undefined) {
                        if (o.lookup.items != undefined && o.lookup.items.length > 0) {
                            if (o.dataField == "USEYN") {
                                e.data.USEYN = "Y";
                            }
                            else {
                                /* 룩업에 항목이 하나인 경우에만 자동 선택*/
                                if (o.lookup.items.length == 1) {
                                    e.data[o.dataField] = o.lookup.items[0][o.lookup.valueExpr];
                                }
                            }
                        }
                    }
                });
            }
        }
    }
}

function userCustomEditingStart(e) {
    //console.log('userCustomEditingStart');
    if (e != undefined && e.component != undefined) {
    }
}

function userCustomEditorPreparing(e) {
    //console.log('userCustomEditorPreparing');
    if (e != undefined && e.component != undefined) {
        var visibleColumns = e.component.getVisibleColumns();
        var initField = e.component.option('KEY_FIELD');

        if (initField != undefined) {
            if (e.parentType === "dataRow") {
                for (fieldIndex = 0; initField.length > fieldIndex; fieldIndex++) {
                    visibleColumns.forEach(function (o) {
                        if (e.dataField == initField[fieldIndex]) {
                            if (typeof e.row.key == "string") {
                                e.editorOptions.disabled = true;
                            }
                        }
                    });
                }
            }
        }
    }
}

function userCustomCellPrepared(e) {
    //console.log('userCustomCellPrepared');
    if (e != undefined && e.component != undefined) {
        if (e.rowType == 'data' && !e.row.inserted) {
            var cancelField = e.component.option('CANCEL_FIELD');
            if (cancelField != undefined) {
                if (typeof cancelField == "string") {
                    if (typeof e.row.data[cancelField] != undefined && e.row.data[cancelField] == 'Y') {
                        e.cellElement.addClass('noUseData');
                    }
                } else {
                    if (cancelField.length == 1) {
                        if (typeof e.row.data[cancelField[0]] != undefined && e.row.data[cancelField[0]] == 'Y') {
                            e.cellElement.addClass('noUseData');
                        }
                    } else if (cancelField.length > 1) {
                        if (typeof e.row.data[cancelField[0]] != undefined && e.row.data[cancelField[0]] == cancelField[1]) {
                            e.cellElement.addClass('noUseData');
                        }
                    }
                }
            }
        } else {
            e.cellElement.removeClass('noUseData');
        }

        if (e.rowType == 'header') {
            e.cellElement.css('text-align', 'center');
        }
    }

    if (e != undefined && e.component != undefined) {
        if (e.rowType == 'data' && !e.row.inserted) {
            var cancelField = e.component.option('COMPLETE_FIELD');
            if (cancelField != undefined) {
                if (typeof cancelField == "string") {
                    if (typeof e.row.data[cancelField] != undefined && e.row.data[cancelField] == 'Y') {
                        e.cellElement.addClass('completeData');
                    }
                } else {
                    if (cancelField.length == 1) {
                        if (typeof e.row.data[cancelField[0]] != undefined && e.row.data[cancelField[0]] == 'Y') {
                            e.cellElement.addClass('completeData');
                        }
                    } else if (cancelField.length > 1) {
                        if (typeof e.row.data[cancelField[0]] != undefined && e.row.data[cancelField[0]] == cancelField[1]) {
                            e.cellElement.addClass('completeData');
                        }
                    }
                }
            }
        } else {
            e.cellElement.removeClass('completeData');
        }

        if (e.rowType == 'header') {
            e.cellElement.css('text-align', 'center');
        }
    }

    if (e != undefined && e.component != undefined) {
        if (e.rowType == 'data' && !e.row.inserted) {
            var cancelField = e.component.option('FAIL_FIELD');
            if (cancelField != undefined) {
                if (typeof cancelField == "string") {
                    if (typeof e.row.data[cancelField] != undefined && e.row.data[cancelField] == 'Y') {
                        e.cellElement.addClass('failData');
                    }
                } else {
                    if (cancelField.length == 1) {
                        if (typeof e.row.data[cancelField[0]] != undefined && e.row.data[cancelField[0]] == 'Y') {
                            e.cellElement.addClass('failData');
                        }
                    } else if (cancelField.length > 1) {
                        if (typeof e.row.data[cancelField[0]] != undefined && e.row.data[cancelField[0]] == cancelField[1]) {
                            e.cellElement.addClass('failData');
                        }
                    }
                }
            }
        } else {
            e.cellElement.removeClass('failData');
        }

        if (e.rowType == 'header') {
            e.cellElement.css('text-align', 'center');
        }
    }
}

function userCustomContentReady(e) {
    if (e != null) {
        //console.log('userCustomContentReady');
    }

    if (e.component.option("updating") && !e.component.hasEditData()) {  // updates finished successfully
        DevExpress.ui.notify(formatMessage('M_SUCCESSED'), 'success', globalNotificationSuccessTime);

        if (e.component.option("MANUAL_UPDATING") != true) {
            e.component.option("updating", false);
        }        
    }
}

if (!String.prototype.format) {
    String.prototype.format = function () {
        var s = this,
            i = arguments.length;

        while (i--) {
            s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
        }
        return s;
    };
}

var __entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
};

if (!String.prototype.escapeHTML) {
    String.prototype.escapeHTML = function() {
        return String(this).replace(/[&<>"'\/]/g,
            function(s) {
                return __entityMap[s];
            });
    }
}

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

Date.prototype.toJSON = function () { return moment(this).format(); }


/* zebra browser print */
var zebraBrowserSelected_device;
var zebraBrowserdevices = [];
var zebraBrowserdeviceNames = [];

function zebraBrowserPrintSetup() {

    zebraBrowserdevices = [];
    zebraBrowserdeviceNames = [];

    //Get the default device from the application as a first step. Discovery takes longer to complete.
    BrowserPrint.getDefaultDevice("printer", function (device) {

        //Add device to list of zebraBrowserdevices and to html select element
        zebraBrowserSelected_device = device;
        zebraBrowserdevices.push(device);
        zebraBrowserdeviceNames.push(device.name);

        var zebraBrowserSelectePrinter = Cookies.get("zebraBrowserSelectePrinter");

        if (zebraBrowserSelectePrinter != undefined) {

            for (var printIndex = 0; printIndex < zebraBrowserdevices.length; ++printIndex) {
                if (zebraBrowserSelectePrinter == zebraBrowserdevices[printIndex].uid) {
                    zebraBrowserSelected_device = zebraBrowserdevices[printIndex];
                    break;
                }
            }
        }

        //Discover any other zebradevices available to the application
        BrowserPrint.getLocalDevices(function (device_list) {
            for (var i = 0; i < device_list.length; i++) {
                //Add device to list of zebraBrowserdevices and to html select element
                var device = device_list[i];
                if (!zebraBrowserSelected_device || device.uid != zebraBrowserSelected_device.uid) {
                    zebraBrowserdevices.push(device);
                    zebraBrowserdeviceNames.push(device.name);
                }
            }

            $('#zebraPrinterList').dxSelectBox('instance').option('dataSource', zebraBrowserdeviceNames);
            $('#zebraPrinterList').dxSelectBox('instance').option('value', zebraBrowserSelectePrinter);

        }, function () { alert("Error getting local zebraBrowserdevices") }, "printer");

    }, function (error) {
        DevExpress.ui.notify(error, 'error', globalNotificationErrorTime);
    })
}

function getConfig() {
    BrowserPrint.getApplicationConfiguration(function (config) {
        DevExpress.ui.notify(JSON.stringify(config), 'success', globalNotificationSuccessTime);
    }, function (error) {
        DevExpress.ui.notify(JSON.stringify(new BrowserPrint.ApplicationConfiguration() + error), 'error', globalNotificationErrorTime);
    })
}

function writeToSelectedPrinter(dataToWrite) {
    zebraBrowserSelected_device.sendThenRead(dataToWrite, readCallback, errorCallback);
}

var readCallback = function (readData) {
    if (readData === undefined || readData === null || readData === "") {
        $('#zebraPrinterResponse').dxTextArea('instance').option('value', new Date().toTimeString() + ' ' + 'No Response from Device');
    }
    else {
        $('#zebraPrinterResponse').dxTextArea('instance').option('value', new Date().toTimeString() + ' ' + readData);
    }

}
var errorCallback = function (errorMessage) {
    DevExpress.ui.notify("error : " + errorMessage, 'error', globalNotificationErrorTime);
}

function readFromSelectedPrinter() {
    zebraBrowserSelected_device.read(readCallback, errorCallback);
}

function getDeviceCallback(deviceList) {
    DevExpress.ui.notify("zebraBrowserdevices: \n" + JSON.stringify(deviceList, null, 4), 'info', globalNotificationInfoTime);
}

function sendImage(imageUrl) {
    url = window.location.href.substring(0, window.location.href.lastIndexOf("/"));
    url = url + "/" + imageUrl;
    zebraBrowserSelected_device.sendUrl(url, undefined, errorCallback)
}

function sendImageHttp(imageUrl) {
    url = window.location.href.substring(0, window.location.href.lastIndexOf("/"));
    url = url + "/" + imageUrl;
    url = url.replace("https", "http");
    zebraBrowserSelected_device.sendUrl(url, undefined, errorCallback)
}

function checkGlobalProcess() {
    if (globalProcessCode === undefined) {
        $('#noSelectProcessMessage').show();
    }
}

function checkglobalWorkcenterCode() {
    if ((globalProcessCode === undefined || globalWorkcenterCode === undefined)) {
        $('#noSelectWorkcenterMessage').show();
    }

}