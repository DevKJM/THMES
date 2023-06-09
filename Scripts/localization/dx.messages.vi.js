﻿/*!
* DevExtreme (dx.messages.vi.js)
* Version: 18.2.8
* Build date: Tue Apr 23 2019
*
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define(function(require) {
            factory(require("devextreme/localization"))
        })
    } else {
        if ("object" === typeof module && module.exports) {
            factory(require("devextreme/localization"))
        } else {
            factory(DevExpress.localization)
        }
    }
}(this, function(localization) {
    localization.loadMessages({
        vi: {
            Yes: "Có",
            No: "Không",
            Cancel: "Hủy",
            Clear: "Xóa",
            Done: "Xong",
            Loading: "Đang tải ...",
            Select: "Chọn ...",
            Search: "Tìm kiếm",
            Back: "Quay lại",
            OK: "được",
            "dxCollectionWidget-noDataText": "Không có dữ liệu để hiển thị",
            "validation-required": "Bắt buộc",
            "validation-required-formatted": "{0} là bắt buộc",
            "validation-numeric": "Giá trị phải là số",
            "validation-numeric-formatted": "{0} phải là số",
            "validation-range": "Giá trị nằm ngoài phạm vi",
            "validation-range-formatted": "{0} nằm ngoài phạm vi",
            "validation-stringLength": "Độ dài của giá trị không chính xác",
            "validation-stringLength-formatted": "Độ dài của {0} không chính xác",
            "validation-custom": "Giá trị không hợp lệ",
            "validation-custom-formatted": "{0} không hợp lệ",
            "validation-compare": "Các giá trị không khớp",
            "validation-compare-formatted": "{0} không khớp",
            "validation-pattern": "Giá trị không khớp với mẫu",
            "validation-pattern-formatted": "{0} không khớp với mẫu",
            "validation-email": "Email không hợp lệ",
            "validation-email-formatted": "{0} không hợp lệ",
            "validation-mask": "Giá trị không hợp lệ",
            "dxLookup-searchPlaceholder": "Số ký tự tối thiểu: {0}",
            "dxList-pullingDownText": "Kéo xuống để làm mới ...",
            "dxList-pulledDownText": "Phát hành để làm mới ...",
            "dxList-refreshingText": "Làm mới ...",
            "dxList-pageLoadingText": "Đang tải ...",
            "dxList-nextButtonText": "Khác",
            "dxList-selectAll": "Chọn tất cả",
            "dxListEditDecorator-delete": "Xóa",
            "dxListEditDecorator-more": "Khác",
            "dxScrollView-pullingDownText": "Kéo xuống để làm mới ...",
            "dxScrollView-pulledDownText": "Phát hành để làm mới ...",
            "dxScrollView-refreshingText": "Làm mới ...",
            "dxScrollView-reachBottomText": "Đang tải ...",
            "dxDateBox-simulatedDataPickerTitleTime": "Chọn thời gian",
            "dxDateBox-simulatedDataPickerTitleDate": "Chọn ngày",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Chọn ngày và giờ",
            "dxDateBox-validation-datetime": "Giá trị phải là ngày hoặc thời gian",
            "dxFileUploader-selectFile": "Chọn tệp",
            "dxFileUploader-dropFile": "hoặc thả tệp vào đây",
            "dxFileUploader-bytes": "byte",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Tải lên",
            "dxFileUploader-uploaded": "Đã tải lên",
            "dxFileUploader-readyToUpload": "Sẵn sàng để tải lên",
            "dxFileUploader-uploadFailedMessage": "Tải lên thất bại",
            "dxFileUploader-invalidFileExtension": "Loại tệp không được phép",
            "dxFileUploader-invalidMaxFileSize": "Tệp quá lớn",
            "dxFileUploader-invalidMinFileSize": "Tệp quá nhỏ",
            "dxRangeSlider-ariaFrom": "Từ",
            "dxRangeSlider-ariaTill": "Đến",
            "dxSwitch-switchedOnText": "ON",
            "dxSwitch-switchedOffText": "OFF",
            "dxForm-optionalMark": "không bắt buộc",
            "dxForm-requiredMessage": "{0} là bắt buộc",
            "dxNumberBox-invalidValueMessage": "Giá trị phải là một số",
            "dxDataGrid-columnChooserTitle": "Cột Chooser",
            "dxDataGrid-columnChooserEmptyText": "Kéo một cột ở đây để ẩn nó",
            "dxDataGrid-groupContinuesMessage": "Tiếp tục trên trang tiếp theo",
            "dxDataGrid-groupContinuedMessage": "Tiếp tục từ trang trước",
            "dxDataGrid-groupHeaderText": "Nhóm theo cột này",
            "dxDataGrid-ungroupHeaderText": "Ungroup",
            "dxDataGrid-ungroupAllText": "Ungroup All",
            "dxDataGrid-editingEditRow": "Chỉnh sửa",
            "dxDataGrid-editingSaveRowChanges": "Lưu",
            "dxDataGrid-editingCancelRowChanges": "Hủy bỏ",
            "dxDataGrid-editingDeleteRow": "Xóa",
            "dxDataGrid-editingUndeleteRow": "Undelete",
            "dxDataGrid-editingConfirmDeleteMessage": "bạn có chắc chắn muốn xóa hồ sơ này?",
            "dxDataGrid-validationCancelChanges": "Hủy bỏ thay đổi",
            "dxDataGrid-groupPanelEmptyText": "Kéo một tiêu đề cột vào đây để nhóm theo cột rằng",
            "dxDataGrid-noDataText": "Không có dữ liệu",
            "dxDataGrid-searchPanelPlaceholder": "Tìm kiếm ...",
            "dxDataGrid-filterRowShowAllText": "(Tất cả)",
            "dxDataGrid-filterRowResetOperationText": "Đặt lại",
            "dxDataGrid-filterRowOperationEquals": "Bằng",
            "dxDataGrid-filterRowOperationNotEquals": "không bằng",
            "dxDataGrid-filterRowOperationLess": "Ít hơn",
            "dxDataGrid-filterRowOperationLessOrEquals": "Nhỏ hơn hoặc bằng",
            "dxDataGrid-filterRowOperationGreater": "Lớn hơn",
            "dxDataGrid -filterRowOperationGreaterOrEquals ": "Lớn hơn hoặc bằng",
            "dxDataGrid-filterRowOperationStartsWith": "Bắt đầu với",
            "dxDataGrid-filterRowOperationContains": "có",
            "dxDataGrid-filterRowOperationNotContains": "không chứa",
            "dxDataGrid-filterRowOperationEndsWith": "Kết thúc bằng",
            "dxDataGrid-filterRowOperationBetween": "Giữa",
            "dxDataGrid-filterRowOperationBetweenStartText": "Khởi đầu",
            "dxDataGrid-filterRowOperationBetweenEndText": "Kết thúc",
            "dxDataGrid-applyFilterText": "Áp dụng bộ lọc",
            "dxDataGrid-trueText": "thật",
            "dxDataGrid-falseText": "sai",
            "dxDataGrid-sortingAscendingText": "Sắp xếp tăng dần",
            "dxDataGrid-sortingDescendingText": "Sắp xếp Giảm dần",
            "dxDataGrid-sortingClearText": "Xóa sắp xếp",
            "dxDataGrid-editingSaveAllChanges": "Lưu thay đổi",
            "dxDataGrid-editingCancelAllChanges": "Hủy thay đổi",
            "dxDataGrid-editingAddRow": "Thêm một hàng",
            "dxDataGrid-summaryMin": "Tối thiểu: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Tối thiểu của {1} là {0}",
            "dxDataGrid-summaryMax": "Tối đa: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Tối đa {1} là {0}",
            "dxDataGrid-summaryAvg": "Trung bình: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Trung bình của {1} là {0}",
            "dxDataGrid-summarySum": "Tổng: {0}",
            "dxDataGrid-summarySumOtherColumn": "Tổng của {1} là {0}",
            "dxDataGrid-summaryCount": "Đếm: {0}",
            "dxDataGrid-columnFixingFix": "Khắc phục sự",
            "dxDataGrid-columnFixingUnfix": "tháo ra",
            "dxDataGrid-columnFixingLeftPosition": "bên trái",
            "dxDataGrid-columnFixingRightPosition": "Bên phải",
            "dxDataGrid-exportTo": "Xuất",
            "dxDataGrid-exportToExcel": "Xuất ra tệp Excel",
            "dxDataGrid-excelFormat": "Tệp Excel",
            "dxDataGrid-selectedRows": "Các hàng được chọn",
            "dxDataGrid-exportSelectedRows": "Xuất các hàng đã chọn",
            "dxDataGrid-exportAll": "Xuất tất cả dữ liệu",
            "dxDataGrid-headerFilterEmptyValue": "(Blanks)",
            "dxDataGrid-headerFilterOK": "được",
            "dxDataGrid-headerFilterCancel": "Hủy bỏ",
            "dxDataGrid-ariaColumn": "Cột",
            "dxDataGrid-ariaValue": "Giá trị",
            "dxDataGrid-ariaFilterCell": "Bộ lọc tế bào",
            "dxDataGrid-ariaCollapse": "Collapse",
            "dxDataGrid-ariaExpand": "Mở rộng",
            "dxDataGrid-ariaDataGrid": "lưới dữ liệu",
            "dxDataGrid-ariaSearchInGrid": "Tìm kiếm trong lưới dữ liệu",
            "dxDataGrid-ariaSelectAll": "Chọn tất cả",
            "dxDataGrid-ariaSelectRow": "Chọn hàng",
            "dxDataGrid-filterBuilderPopupTitle": "Lọc Builder",
            "dxDataGrid-filterPanelCreateFilter": "Tạo Bộ lọc",
            "dxDataGrid-filterPanelClearFilter": "Clear",
            "dxDataGrid-filterPanelFilterEnablesHint": "Kích hoạt bộ lọc",
            "dxTreeList-ariaTreeList": "Danh sách cây",
            "dxTreeList-editingAddRowToNode": "Thêm",
            "dxPager-infoText": "Trang {0} trong số {1} ({2} mục)",
            "dxPager-pagesCountText": "của",
            "dxPivotGrid-grandTotal": "Tổng cộng",
            "dxPivotGrid-total": "{0} Tổng",
            "dxPivotGrid-fieldChooserTitle": "Field Chooser",
            "dxPivotGrid-showFieldChooser": "Hiển thị Trình chọn trường",
            "dxPivotGrid-expandAll": "Mở rộng tất cả",
            "dxPivotGrid-collapseAll": "Thu gọn tất cả",
            "dxPivotGrid-sortColumnBySummary": 'Sắp xếp" {0} "theo Cột này',
            "dxPivotGrid-sortRowBySummary": 'Sắp xếp" {0} "theo Hàng này',
            "dxPivotGrid-removeAllSorting": "Xóa tất cả sắp xếp",
            "dxPivotGrid-dataNotAvailable": "Không có",
            "dxPivotGrid-rowFields": "Lĩnh vực hàng",
            "dxPivotGrid-columnFields": "Cột Fields",
            "dxPivotGrid-dataFields": "Dữ liệu Fields",
            "dxPivotGrid-filterFields": "Lọc Fields",
            "dxPivotGrid-allFields": "Tất cả các Fields",
            "dxPivotGrid-columnFieldArea": "thả Fields Cột Here",
            "dxPivotGrid-dataFieldArea": "thả Fields liệu Here",
            "dxPivotGrid-rowFieldArea": "Trường thả hàng ở đây",
            "dxPivotGrid-filterFieldArea": "Thả trường bộ lọc ở đây",
            "dxScheduler-editorLabelTitle": "Chủ đề",
            "dxScheduler-editorLabelStartDate": "Ngày bắt đầu",
            "dxScheduler-editorLabelEndDate": "Ngày kết thúc",
            "dxScheduler-editorLabelDescription": "Mô tả",
            "dxScheduler-editorLabelRecurrence": "Lặp lại",
            "dxScheduler-openAppointment": "Mở cuộc hẹn",
            "dxScheduler-recurrenceNever": "Không bao giờ",
            "dxScheduler-recurrenceDaily": "Hàng ngày",
            "dxScheduler-recurrenceWeekly": "Hàng tuần",
            "dxScheduler-recurrenceMonthly": "hàng tháng",
            "dxScheduler-recurrenceYearly": "Trong Năm",
            "dxScheduler-recurrenceEvery": "Mỗi",
            "dxScheduler-recurrenceEnd": "Kết thúc lặp lại",
            "dxScheduler-recurrenceAfter": "Sau",
            "dxScheduler-recurrenceOn": "On",
            "dxScheduler-recurrenceRepeatDaily": "ngày (s)",
            "dxScheduler-recurrenceRepeatWeekly": "Tuần (s)",
            "dxScheduler-recurrenceRepeatMonthly": "tháng (s)",
            "dxScheduler-recurrenceRepeatYearly": "Năm (s)",
            "dxScheduler-switcherDay": "ngày",
            "dxScheduler-switcherWeek": "Tuần",
            "dxScheduler-switcherWorkWeek": "Tuần làm việc",
            "dxScheduler-switcherMonth": "Tháng",
            "dxScheduler-switcherAgenda": "Chương trình nghị sự",
            "dxScheduler-switcherTimelineDay": "Timeline Day",
            "dxScheduler-switcherTimelineWeek": "Timeline Week",
            "dxScheduler-switcherTimelineWorkWeek": "Timeline Tuần làm việc",
            "dxScheduler-switcherTimelineMonth": "Timeline tháng",
            "dxScheduler-recurrenceRepeatOnDate": "vào ngày",
            " dxScheduler-recurrenceRepeatCount": "xảy ra (s)",
            "dxScheduler-allDay": "Cả ngày",
            "dxScheduler-confirmRecurrenceEditMessage": "Bạn có muốn chỉ chỉnh sửa cuộc hẹn này hay toàn bộ chuỗi không?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Bạn có muốn xóa chỉ hẹn này hoặc toàn bộ loạt?",
            "dxScheduler-confirmRecurrenceEditSeries": "Chỉnh sửa hàng loạt",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Xóa hàng loạt",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Chỉnh sửa cuộc hẹn",
            "dxScheduler-ConfirmRecurrenceDeleteOccurrence": "Xóa cuộc hẹn",
            "dxScheduler-noTimezoneTitle": "Không có múi giờ",
            "dxScheduler-moreAppointments": "{0} nữa",
            "dxCalendar-todayButtonText": "Hôm nay",
            "dxCalWiki-ariaWidgetName": "Lịch",
            "dxColorView-ariaRed": "Đỏ",
            "dxColorView-ariaGreen": "Xanh",
            "dxColorView-ariaBlue": "Xanh lam",
            "dxColorView-ariaAlpha": "Minh bạch",
            "dxColorView-ariaHex": "Mã màu",
            "dxTagBox-selected": "{0} đã chọn",
            "dxTagBox-allSelected": "Tất cả được chọn ({0})",
            "dxTagBox-moreSelected": "{0} nhiều hơn",
            "vizExport-printingButtonText": "In",
            "vizExport-titleMenuText": "Xuất khẩu/In ấn",
            "vizExport-exportButtonText": "{0} tập tin",
            "dxFilterBuilder-and": "và",
            "dxFilterBuilder-or": "hoặc là",
            "dxFilterBuilder-notAnd": "Không phải và",
            "dxFilterBuilder-notOr": "Không phải hoặc là",
            "dxFilterBuilder-addCondition": "Thêm điều kiện",
            "dxFilterBuilder-addGroup": "Thêm nhóm",
            "dxFilterBuilder-enterValueText": "<nhập một giá trị>",
            "dxFilterBuilder-filterOperationEquals": "Bằng",
            "dxFilterBuilder-filterOperationNotEquals": "Không công bằng",
            "dxFilterBuilder-filterOperationLess": "Ít hơn",
            "dxFilterBuilder-filterOperationLessOrEquals": "Có phải nhỏ hơn hoặc bằng",
            "dxFilterBuilder-filterOperationGreater": "Phải lớn hơn",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "phải lớn hơn hoặc bằng",
            "dxFilterBuilder-filterOperationStartsWith": "Bắt đầu với",
            "dxFilterBuilder-filterOperationContains": "có",
            "dxFilterBuilder-filterOperationNotContains": "không chứa",
            "dxFilterBuilder-filterOperationEndsWith": "Kết thúc bằng",
            "dxFilterBuilder-filterOperationIsBlank": "Đang trống",
            "dxFilterBuilder-filterOperationIsNotBlank": "Không trống",
            "dxFilterBuilder-filterOperationBetween": "Liệu giữa",
            "dxFilterBuilder-filterOperationAnyOf": "Là bất kỳ",
            "dxFilterBuilder-filterOperationNoneOf": "Có phải không ai trong số",
            "dxHtmlEditor-dialogColorCaption": "Thay đổi Font Color",
            "dxHtmlEditor-dialogBackgroundCaption": "Change Background Color",
            "dxHtmlEditor-dialogLinkCaption": "Add link",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "văn bản",
            "dxHtmlEditor-dialogLinkTargetField": "mở liên kết trong cửa sổ mới",
            "dxHtmlEditor-dialogImageCaption": "Thêm hình ảnh",
            "dxHtmlEditor-dialogImageUrlField ": "URL",
            "dxHtmlEditor-dialogImageAltField": "Văn bản thay thế",
            "dxHtmlEditor-dialogImageWidthField": "Chiều rộng (px)",
            "dxHtmlEditor-dialogImageHeightField": "Chiều cao (px)",
            "dxHtmlEditor-heading": "Heading",
            "dxHtmlEditor-normalText": "Văn bản bình thường"
        }
    })
});
