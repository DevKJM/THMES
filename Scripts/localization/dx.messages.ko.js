﻿/*!
* DevExtreme (dx.messages.en.js)
* Version: 17.2.7
* Build date: Fri Mar 16 2018
*
* Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define(function(require) {
            factory(require("devextreme/localization"))
        })
    } else {
        factory(DevExpress.localization)
    }
}(this, function (localization) {
    /* Prefix E_ Enum, H_ Tooltip, S_ Grid Header Catpion, L_ Grid Header Length, M_ MessageBox */
    localization.loadMessages({
        ko: {
            Yes: "예",
            No: "아니오",
            Cancel: "취소",
            Clear: "제거",
            Done: "완료",
            Loading: "로드중...",
            Select: "선택...",
            Search: "검색",
            Back: "뒤로",
            OK: "확인",
            "dxCollectionWidget-noDataText": "표시 할 데이터 없음",
            "validation-required": "Required",
            "validation-required-formatted": "{0}은 필수",
            "validation-numeric": "값은 숫자 여야합니다",
            "validation-numeric-formatted": "{0}은 숫자 여야합니다.",
            "validation-range": "값이 범위를 벗어났습니다.",
            "validation-range-formatted": "{0}이 범위를 벗어났습니다.",
            "validation-stringLength": "값의 길이가 올바르지 않습니다.",
            "validation-stringLength-formatted": "{0}의 길이가 올바르지 않습니다.",
            "validation-custom": "값이 유효하지 않습니다",
            "validation-custom-formatted": "{0}은 (는) 유효하지 않습니다",
            "validation-compare": "값이 일치하지 않습니다",
            "validation-compare-formatted": "{0}이 (가) 일치하지 않습니다",
            "validation-pattern": "값이 패턴과 일치하지 않습니다.",
            "validation-pattern-formatted": "{0}은 (는) 패턴과 일치하지 않습니다.",
            "validation-email": "이메일이 유효하지 않습니다",
            "validation-email-formatted": "{0}은 (는) 유효하지 않습니다",
            "validation-mask": "값이 유효하지 않습니다",
            "dxLookup-searchPlaceholder": "최소 문자 수 : {0}",
            "dxList-pullingDownText": "새로 고침하려면 아래로 당깁니다 ...",
            "dxList-pullledDownText": "새로 고침 ...",
            "dxList-refreshingText": "새로 고침 중 ...",
            "dxList-pageLoadingText": "로드 중 ...",
            "dxList-nextButtonText": "추가",
            "dxList-selectAll": "모두 선택",
            "dxListEditDecorator-delete": "삭제",
            "dxListEditDecorator-more": "More",
            "dxScrollView-pullingDownText": "새로 고침하려면 아래로 당깁니다 ...",
            "dxScrollView-pullledDownText": "새로 고침하여 새로 고침 ...",
            "dxScrollView-refreshingText": "새로 고침 중 ...",
            "dxScrollView-reachBottomText": "로드 중 ...",
            "dxDateBox-simulatedDataPickerTitleTime": "시간 선택",
            "dxDateBox-simulatedDataPickerTitleDate": "날짜 선택",
            "dxDateBox-simulatedDataPickerTitleDateTime": "날짜 및 시간 선택",
            "dxDateBox-validation-datetime": "값은 날짜 또는 시간이어야합니다",
            "dxFileUploader-selectFile": "파일 선택",
            "dxFileUploader-dropFile": "또는 여기에 파일 놓기 ",
            "dxFileUploader-bytes": "바이트",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "업로드",
            "dxFileUploader-uploaded": "업로드 됨",
            "dxFileUploader-readyToUpload": "업로드 준비 완료",
            "dxFileUploader-uploadFailedMessage": "업로드하지 못했습니다",
            "dxFileUploader-invalidFileExtension": "파일 형식을 사용할 수 없습니다",
            "dxFileUploader-invalidMaxFileSize": "파일이 너무 큽니다",
            "dxFileUploader-invalidMinFileSize": "파일이 너무 작음",
            "dxRangeSlider-ariaFrom": "보낸 사람",
            "dxRangeSlider-ariaTill": "Till",
            "dxSwitch-switchedOnText": "ON",
            "dxSwitch-switchedOffText": "OFF",
            "dxForm-optionalMark": "선택 사항",
            "dxForm-requiredMessage": "{0}은 (는) 필수 항목입니다",
            "dxNumberBox-invalidValueMessage": "값은 숫자 여야합니다.",
            "dxDataGrid-columnChooserTitle": "열 선택기",
            "dxDataGrid-columnChooserEmptyText": "숨기려면 여기에 열을 끌어다 놓습니다.",
            "dxDataGrid-groupContinuesMessage": "다음 페이지에서 계속 진행",
            "dxDataGrid-groupContinuedMessage": "이전 페이지에서 계속",
            "dxDataGrid-groupHeaderText": "이 열의 그룹화",
            "dxDataGrid-ungroupHeaderText": "그룹 해제",
            "dxDataGrid-ungroupAllText": "모두 그룹 해제",
            "dxDataGrid-editingEditRow": "편집",
            "dxDataGrid-editingSaveRowChanges": "저장",
            "dxDataGrid-editingCancelRowChanges": "취소",
            "dxDataGrid-editingDeleteRow": "삭제",
            "dxDataGrid-editingUndeleteRow": "삭제 취소",
            "dxDataGrid-editingConfirmDeleteMessage": "이 레코드를 삭제 하시겠습니까?",
            "dxDataGrid-validationCancelChanges": "변경 사항 취소",
            "dxDataGrid-groupPanelEmptyText": "여기에 열 머리글을 끌어 해당 열을 기준으로 그룹화",
            "dxDataGrid-noDataText": "데이터 없음",
            "dxDataGrid-searchPanelPlaceholder": "검색 ...",
            "dxDataGrid-filterRowShowAllText": "(모두)",
            "dxDataGrid-filterRowResetOperationText": "재설정",
            "dxDataGrid-filterRowOperationEquals": "같음",
            "dxDataGrid-filterRowOperationNotEquals": "같지 않음",
            "dxDataGrid-filterRowOperationLess": "미만",
            "dxDataGrid-filterRowOperationLessOrEquals": "작거나 같음",
            "dxDataGrid-filterRowOperationGreater": "보다 큼",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "크거나 같음",
            "dxDataGrid-filterRowOperationStartsWith": "다음으로 시작",
            "dxDataGrid-filterRowOperationContains": "포함",
            "dxDataGrid-filterRowOperationNotContains": "포함하지 않음",
            "dxDataGrid-filterRowOperationEndsWith": "끝",
            "dxDataGrid-filterRowOperationBetween": "사이",
            "dxDataGrid-filterRowOperationBetweenStartText": "시작",
            "dxDataGrid-filterRowOperationBetweenEndText": "End",
            "dxDataGrid-applyFilterText": "필터 적용",
            "dxDataGrid-trueText": "true",
            "dxDataGrid-falseText": "false",
            "dxDataGrid-sortingAscendingText": "오름차순 정렬",
            "dxDataGrid-sortingDescendingText": "내림차순 정렬",
            "dxDataGrid-sortingClearText": "정렬 지우기",
            "dxDataGrid-editingSaveAllChanges": "변경 사항 저장",
            "dxDataGrid-editingCancelAllChanges": "변경 사항 무시",
            "dxDataGrid-editingAddRow": "행 추가",
            "dxDataGrid-summaryMin": "최소 : {0}",
            "dxDataGrid-summaryMinOtherColumn": "{1}의 최소값은 {0}입니다.",
            "dxDataGrid-summaryMax": "최대 : {0}",
            "dxDataGrid-summaryMaxOtherColumn": "{1}의 최대 값은 {0}입니다.",
            "dxDataGrid-summaryAvg": "평균 : {0}",
            "dxDataGrid-summaryAvgOtherColumn": "{1}의 평균은 {0}입니다.",
            "dxDataGrid-summarySum": "합계 : {0}",
            "dxDataGrid-summarySumOtherColumn": "{1}의 합계는 {0}입니다.",
            "dxDataGrid-summaryCount": "개수 : {0}",
            "dxDataGrid-columnFixingFix": "수정",
            "dxDataGrid-columnFixingUnfix": "Unfix",
            "dxDataGrid-columnFixingLeftPosition": "왼쪽으로",
            "dxDataGrid-columnFixingRightPosition": "오른쪽으로",
            "dxDataGrid-exportTo": "내보내기",
            "dxDataGrid-exportToExcel": "Excel 파일로 내보내기",
            "dxDataGrid-excelFormat": "Excel 파일",
            "dxDataGrid-selectedRows": "선택한 행",
            "dxDataGrid-exportSelectedRows": "선택한 행 내보내기",
            "dxDataGrid-exportAll": "모든 데이터 내보내기",
            "dxDataGrid-headerFilterEmptyValue": "(공백)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "취소",
            "dxDataGrid-ariaColumn": "열",
            "dxDataGrid-ariaValue": "값",
            "dxDataGrid-ariaFilterCell": "필터 셀",
            "dxDataGrid-ariaCollapse": "축소",
            "dxDataGrid-ariaExpand": "확장",
            "dxDataGrid-ariaDataGrid": "데이터 격자",
            "dxDataGrid-ariaSearchInGrid": "데이터 격자에서 검색",
            "dxDataGrid-ariaSelectAll": "모두 선택",
            "dxDataGrid-ariaSelectRow": "행 선택",
            "dxDataGrid-filterBuilderPopupTitle": "필터 빌더",
            "dxDataGrid-filterPanelCreateFilter": "필터 만들기",
            "dxDataGrid-filterPanelClearFilter": "삭제",
            "dxDataGrid-filterPanelFilterEnabledHint": "필터 사용",
            "dxTreeList-ariaTreeList": "트리 목록",
            "dxTreeList-editingAddRowToNode": "추가",
            "dxPager-infoText": "{1} ({2} 개 아이템) 중 페이지 {0}",
            "dxPager-pagesCountText": "of",
            "dxPivotGrid-grandTotal": "총계",
            "dxPivotGrid-total": "{0} 합계",
            "dxPivotGrid-fieldChooserTitle": "필드 선택기",
            "dxPivotGrid-showFieldChooser": "필드 선택기 표시",
            "dxPivotGrid-expandAll": "모두 확장",
            "dxPivotGrid-collapseAll": "모두 접기",
            "dxPivotGrid-sortColumnBySummary": "이 열별로'정렬 {0}",
            "dxPivotGrid-sortRowBySummary": "'이 행별로 정렬 {0}",
            "dxPivotGrid-removeAllSorting": "모든 정렬 제거",
            "dxPivotGrid-dataNotAvailable": "해당 사항 없음",
            "dxPivotGrid-rowFields": "행 필드",
            "dxPivotGrid-columnFields": "열 필드",
            "dxPivotGrid-dataFields": "데이터 필드",
            "dxPivotGrid-filterFields": "필터 필드",
            "dxPivotGrid-allFields": "모든 입력란",
            "dxPivotGrid-columnFieldArea": "여기에 열 필드 삭제",
            "dxPivotGrid-dataFieldArea": "여기에 데이터 필드 놓기",
            "dxPivotGrid-rowFieldArea": "여기에 행 필드 놓기",
            "dxPivotGrid-filterFieldArea": "필터 필드를 여기에 놓습니다",
            "dxScheduler-editorLabelTitle": "제목",
            "dxScheduler-editorLabelStartDate": "시작 날짜",
            "dxScheduler-editorLabelEndDate": "종료 날짜",
            "dxScheduler-editorLabelDescription": "설명",
            "dxScheduler-editorLabelRecurrence": "반복",
            "dxScheduler-openAppointment": "약속 열기",
            "dxScheduler-recurrenceNever": "Never",
            "dxScheduler-recurrenceDaily": "일간",
            "dxScheduler-recurrenceWeekly": "주간",
            "dxScheduler-recurrenceMonthly": "월간",
            "dxScheduler-recurrenceYearly": "매년",
            "dxScheduler-recurrenceEvery": "Every",
            "dxScheduler-recurrenceEnd": "끝 반복",
            "dxScheduler-recurrenceAfter": "이후",
            "dxScheduler-recurrenceOn": "On",
            "dxScheduler-recurrenceRepeatDaily": "요일",
            "dxScheduler-recurrenceRepeatWeekly": "주 (s)",
            "dxScheduler-recurrenceRepeatMonthly": "월 (s)",
            "dxScheduler-recurrenceRepeatYearly": "년 (s)",
            "dxScheduler-switcherDay": "일",
            "dxScheduler-switcherWeek": "주",
            "dxScheduler-switcherWorkWeek": "Work Week",
            "dxScheduler-switcherMonth": "월",
            "dxScheduler-switcherAgenda": "Agenda",
            "dxScheduler-switcherTimelineDay": "Timeline Day",
            "dxScheduler-switcherTimelineWeek": "Timeline Week",
            "dxScheduler-switcherTimelineWorkWeek": "Timeline Work Week",
            "dxScheduler-switcherTimelineMonth": "타임 라인 달",
            "dxScheduler-recurrenceRepeatOnDate": "날짜",
            "dxScheduler-recurrenceRepeatCount": "발생 (들)",
            "dxScheduler-allDay": "하루 종일",
            "dxScheduler-confirmRecurrenceEditMessage": "이 약속 또는 전체 시리즈 만 편집 하시겠습니까?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "이 약속 또는 전체 시리즈 만 삭제 하시겠습니까?",
            "dxScheduler-confirmRecurrenceEditSeries": "시리즈 편집",
            "dxScheduler-confirmRecurrenceDeleteSeries": "시리즈 삭제",
            "dxScheduler-confirmRecurrenceEditOccurrence": "약속 편집",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "약속 삭제",
            "dxScheduler-noTimezoneTitle": "시간대 없음",
            "dxScheduler-more Appointments": "{0} more",
            "dxCalendar-todayButtonText": "오늘",
            "dxCalendar-ariaWidgetName": "캘린더",
            "dxColorView-ariaRed": "빨간색",
            "dxColorView-ariaGreen": "녹색",
            "dxColorView-ariaBlue": "파란색",
            "dxColorView-ariaAlpha": "투명도",
            "dxColorView-ariaHex": "색상 코드",
            "dxTagBox-selected": "{0} selected",
            "dxTagBox-allSelected": "모두 선택됨 ({0})",
            "dxTagBox-moreSelected": "{0} more",
            "vizExport-printingButtonText": "인쇄",
            "vizExport-titleMenuText": "내보내기 / 인쇄",
            "vizExport-exportButtonText": "{0} 파일",
            "dxFilterBuilder-and": "같은",
            "dxFilterBuilder-or": "또는",
            "dxFilterBuilder-notAnd": "같지 않은",
            "dxFilterBuilder-notOr": "같지 않거나",
            "dxFilterBuilder-addCondition": "조건 추가",
            "dxFilterBuilder-addGroup": "그룹 추가",
            "dxFilterBuilder-enterValueText": "<값 입력>",
            "dxFilterBuilder-filterOperationEquals": "같음",
            "dxFilterBuilder-filterOperationNotEquals": "같지 않습니다",
            "dxFilterBuilder-filterOperationLess": "작다",
            "dxFilterBuilder-filterOperationLessOrEquals": "작거나 같음",
            "dxFilterBuilder-filterOperationGreater": "보다 큼",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "보다 크거나 같음",
            "dxFilterBuilder-filterOperationStartsWith": "다음으로 시작",
            "dxFilterBuilder-filterOperationContains": "포함",
            "dxFilterBuilder-filterOperationNotContains": "포함하지 않음",
            "dxFilterBuilder-filterOperationEndsWith": "다음으로 끝냄",
            "dxFilterBuilder-filterOperationIsBlank": "비어 있음",
            "dxFilterBuilder-filterOperationIsNotBlank": "비어 있지 않습니다.",
            "dxFilterBuilder-filterOperationBetween": "사이에 있음",
            "dxFilterBuilder-filterOperationAnyOf": "Is any of", 
            "dxFilterBuilder-filterOperationNoneOf": "아무도 없음",
            "dxHtmlEditor-dialogColorCaption": "글꼴 색상 변경",
            "dxHtmlEditor-dialogBackgroundCaption": "배경색 변경",
            "dxHtmlEditor-dialogLinkCaption": "링크 추가",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "텍스트",
            "dxHtmlEditor-dialogLinkTargetField": "새 창에서 링크 열기",
            "dxHtmlEditor-dialogImageCaption": "이미지 추가",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "대체 텍스트",
            "dxHtmlEditor-dialogImageWidthField": "폭 (px)",
            "dxHtmlEditor-dialogImageHeightField": "높이 (px)",
            "dxHtmlEditor-heading": "제목",
            "dxHtmlEditor-normalText": "일반 텍스트",

            "M_SUCCESSED":"저장 되었습니다.",

            "W_ACTIONCODE": "100",
            "W_ACTIONCOMMENT": "200",
            "W_ADDRESS": "250",
            "W_ADJUSTEDQUANTITY": "80",
            "W_ATTAINMENTRATE": "80",
            "W_ATTRIBUTE1": "200",
            "W_ATTRIBUTE10": "200",
            "W_ATTRIBUTE2": "200",
            "W_ATTRIBUTE3": "200",
            "W_ATTRIBUTE4": "200",
            "W_ATTRIBUTE5": "200",
            "W_ATTRIBUTE6": "200",
            "W_ATTRIBUTE7": "200",
            "W_ATTRIBUTE8": "200",
            "W_ATTRIBUTE9": "200",
            "W_AUTHORITYID": "160",
            "W_AccessFailedCount": "50",
            "W_BEFOREVALUE": "200",
            "W_BOMID": "160",
            "W_BOXPERQUANTITY": "120",
            "W_BUSINESSNUMBER": "120",
            "W_BUSINESSSTATUS": "100",
            "W_CEONAME":"70",
            "W_BUSINESSTYPE": "100",
            "W_CANCELTIME": "70",
            "W_CANCELYN": "70",
            "W_CASECODE": "100",
            "W_CASENAME": "150",
            "W_CLAIMTYPE": "200",
            "W_CLAIMVALUE": "200",
            "W_CODE": "200",
            "W_COLOR": "80",
            "W_COLUMNNAME": "200",
            "W_CONTENT": "200",
            "W_CONTENTID": "200",
            "W_CONTROL1": "200",
            "W_CONTROL10": "200",
            "W_CONTROL2": "200",
            "W_CONTROL3": "200",
            "W_CONTROL4": "200",
            "W_CONTROL5": "200",
            "W_CONTROL6": "200",
            "W_CONTROL7": "200",
            "W_CONTROL8": "200",
            "W_CONTROL9": "200",
            "W_CREATEDATE": "150",
            "W_CREATEUSER": "110",
            "W_CURRENTVALUE": "200",
            "W_CUSTOMERPARTNUMBER": "150",
            "W_DEDE": "200",
            "W_DEDES": "200",
            "W_DEFECTCODE": "150",
            "W_DEFECTHISSEQ": "50",
            "W_DEFECTID": "160",
            "W_DEFECTNAME": "150",
            "W_DEFECTQUANTITY": "100",
            "W_DEFECTRATE": "80",
            "W_DEPARTMENT": "200",
            "W_DESCRIPTION1": "200",
            "W_DESCRIPTION10": "200",
            "W_DESCRIPTION2": "200",
            "W_DESCRIPTION3": "200",
            "W_DESCRIPTION4": "200",
            "W_DESCRIPTION5": "200",
            "W_DESCRIPTION6": "200",
            "W_DESCRIPTION7": "200",
            "W_DESCRIPTION8": "200",
            "W_DESCRIPTION9": "200",
            "W_DETAILCONTENT": "200",
            "W_DISPLAYSEQ": "50",
            "W_DISPLAYYN": "10",
            "W_DRAWINGNO": "100",
            "W_Discriminator": "200",
            "W_EDITYN": "50",
            "W_EMAIL": "200",
            "W_EMPAUTHORITYID": "160",
            "W_EMPCODE": "200",
            "W_EMPGRPCODE": "200",
            "W_EMPGRPID": "160",
            "W_EMPGRPNAME": "200",
            "W_EMPID": "200",
            "W_EMPNAME": "200",
            "W_EMPPWD": "200",
            "W_ENABLE": "10",
            "W_ENDDATE": "80",
            "W_ENUMID": "160",
            "W_ENUS": "200",
            "W_ENUSS": "200",
            "W_EQUIPMENTCODE": "150",
            "W_EQUIPMENTID": "160",
            "W_EQUIPMENTNAME": "170",
            "W_EQUIPMENTTYPE": "100",
            "W_EmailConfirmed": "50",
            "W_FAXNUMBER": "120",
            "W_FILEID": "160",
            "W_FILENAME": "200",
            "W_FILPH": "200",
            "W_FILPHS": "200",
            "W_GOODQUANTITY": "100",
            "W_GROUPCODE": "200",
            "W_HEADER1": "200",
            "W_HEADER2": "200",
            "W_HEADER3": "200",
            "W_HEADER4": "200",
            "W_HEADER5": "200",
            "W_HEADER6": "200",
            "W_HEADER7": "200",
            "W_HEADER8": "200",
            "W_HEADER9": "200",
            "W_HIGHPRIORITYFLAG": "80",
            "W_HMIYN": "50",
            "W_HOLDINGYN": "70",
            "W_HRCODE": "200",
            "W_HRID": "160",
            "W_ID": "200",
            "W_IDXNO": "50",
            "W_INSPECTDATE": "180",
            "W_INSPECTIONRESULT": "80",
            "W_INSPECTIONSEQUENCE": "50",
            "W_INVENTQUANTITY": "150",
            "W_OUTQUANTITY": "150",
            "W_IUDTYPE": "100",
            "W_IdentityUser_Id": "200",
            "W_JAJP": "200",
            "W_JAJPS": "200",
            "W_KOKR": "200",
            "W_KOKRS": "200",
            "W_LANGID": "160",
            "W_LEVELNO": "50",
            "W_LOCATIONCODE": "200",
            "W_LOCATIONID": "160",
            "W_LOCATIONNAME": "200",
            "W_LOGID": "50",
            "W_LOGINPROVIDER": "200",
            "W_LOTNUMBER": "100",
            "W_LockoutEnabled": "50",
            "W_LockoutEndDateUtc": "110",
            "W_MAPPINGQUANTITY": "80",
            "W_MAPPINGSEQ": "50",
            "W_MASK1": "200",
            "W_MASK10": "200",
            "W_MASK2": "200",
            "W_MASK3": "200",
            "W_MASK4": "200",
            "W_MASK5": "200",
            "W_MASK6": "200",
            "W_MASK7": "200",
            "W_MASK8": "200",
            "W_MASK9": "200",
            "W_MASTERTABLENAME": "200",
            "W_MATDEFECTHISSEQ": "50",
            "W_MATERIALCODE": "100",
            "W_MATERIALHISSEQ": "50",
            "W_MATERIALID": "160",
            "W_MATERIALNAME": "300",
            "W_MATERIALTYPE": "100",
            "W_MATWIPSEQUENCE": "50",
            "W_MEMO": "300",
            "W_MENUCODE": "200",
            "W_MENUICON": "200",
            "W_MENUID": "160",
            "W_MENULEVEL": "50",
            "W_MENUNAME": "200",
            "W_NAME": "200",
            "W_NEXTPROCESSCODE": "100",
            "W_NEXTSERIALNUMBER": "200",
            "W_NOPID": "160",
            "W_NOPNAME": "150",
            "W_NOTE": "200",
            "W_ORDERDATE": "80",
            "W_ORDERNUMBER": "120",
            "W_ORDERNUMBER_SEQ": "50",
            "W_ORDERQUANTITY": "100",
            "W_ORDERSEQUENCE": "50",
            "W_OUTSOURCINGYN": "90",
            "W_PARENTMENUID": "160",
            "W_PARTNUMBER": "160",
            "W_PARTNUMBERID": "160",
            "W_PHONENUMBER": "200",
            "W_PLANDATE": "80",
            "W_PLANID": "160",
            "W_PLANQUANTITY": "80",
            "W_PLANTCODE": "100",
            "W_PLANTID": "160",
            "W_PLANTNAME": "150",
            "W_POSITION": "200",
            "W_PREVSEQUENCE": "50",
            "W_PROCESSBOMID": "160",
            "W_PROCESSCODE": "100",
            "W_PROCESSDEFECTID": "160",
            "W_PROCESSEQPID": "160",
            "W_PROCESSGROUP": "200",
            "W_PROCESSID": "160",
            "W_PROCESSNAME": "150",
            "W_PROCESSSQEUENCE": "80",
            "W_PRODHISSEQ": "50",
            "W_PRODUCTGROUP": "100",
            "W_PRODUCTNAME": "200",
            "W_PRODUCTQUANTITY": "100",
            "W_PRODUCTTYPE": "100",
            "W_PROVIDERKEY": "200",
            "W_PURCHASEORDERNO": "200",
            "W_PURCHASEYN": "90",
            "W_PhoneNumberConfirmed": "50",
            "W_QUANTITY": "100",
            "W_REASON": "200",
            "W_RELEASE": "90",
            "W_RECEIVINGDATE": "120",
            "W_PRODUCTIONDATE":"120",
            "W_RECEIVINGQUANTITY": "110",
            "W_RECEIVINGSEQUENCE": "80",
            "W_RECENTDATE": "150",
            "W_RECENTUSER": "110",
            "W_REFLECTIONYN": "100",
            "W_REFEQUIPMENTCODE": "200",
            "W_REQUESTDATE": "110",
            "W_RESULT": "200",
            "W_RESULTSEQUENCE": "50",
            "W_ROLEID": "200",
            "W_ROOTID": "160",
            "W_ROUTEGROUPCODE": "200",
            "W_ROUTEGROUPID": "160",
            "W_ROUTEGROUPNAME": "200",
            "W_ROUTEID": "160",
            "W_SAFETYINVENTQUANTITY": "80",
            "W_SELLYN": "90",
            "W_SEQ": "50",
            "W_SEQUENCE": "50",
            "W_SERIALNUMBER": "150",
            "W_SERIALNUMBER_SEQ": "50",
            "W_SHIFTCODE": "80",
            "W_SHIPPINGPLANID": "160",
            "W_SNSEQUENCE": "50",
            "W_SORTINDEX": "50",
            "W_SPEC": "100",
            "W_SPEC1": "150",
            "W_SPEC2": "150",
            "W_SPEC3": "150",
            "W_STARTDATE": "80",
            "W_STATE": "200",
            "W_STRAIGHTRATE": "80",
            "W_SURVEYDATE": "170",
            "W_SURVEYQUANTITY": "80",
            "W_SURVEYSEQUENCE": "50",
            "W_SURVEYWORKER": "100",
            "W_SYSCODE": "200",
            "W_SYSCODENAME": "200",
            "W_SYSGROUPCODE": "200",
            "W_SYSGROUPID": "160",
            "W_SYSGROUPNAME": "200",
            "W_SYSGRPCD": "160",
            "W_SYSGRPICON": "200",
            "W_SYSID": "160",
            "W_SYSNAME": "200",
            "W_SYSTEMID": "160",
            "W_SecurityStamp": "200",
            "W_TARGETPATH": "200",
            "W_TARGETPORT": "200",
            "W_TELEPHONE": "120",
            "W_TEXTURE": "100",
            "W_TIMECODE": "200",
            "W_TITLE1": "200",
            "W_TITLE10": "200",
            "W_TITLE2": "200",
            "W_TITLE3": "200",
            "W_TITLE4": "200",
            "W_TITLE5": "200",
            "W_TITLE6": "200",
            "W_TITLE7": "200",
            "W_TITLE8": "200",
            "W_TITLE9": "200",
            "W_TRANSCODE": "100",
            "W_TRANSNAME": "100",
            "W_TRIGGERGROUPCODE": "100",
            "W_TwoFactorEnabled": "50",
            "W_UDCF1": "80",
            "W_UDCF2": "50",
            "W_UDCF3": "100",
            "W_UDCF4": "100",
            "W_UDCF5": "200",
            "W_UDCF6": "200",
            "W_UDCF7": "200",
            "W_UDCF8": "200",
            "W_UDCF9": "200",
            "W_UDNF1": "70",
            "W_UDNF2": "70",
            "W_UDNF3": "70",
            "W_UDNF4": "70",
            "W_UDNF5": "70",
            "W_UDNF6": "50",
            "W_UDNF7": "50",
            "W_UDNF8": "50",
            "W_UDNF9": "50",
            "W_UNITCODE": "70",
            "W_UPDATEDATE": "50",
            "W_UPDATEUSER": "200",
            "W_UPLOADEDFILE": "200",
            "W_UPPERIDXNO": "50",
            "W_UPPERPARTNUMBER": "160",
            "W_URL": "200",
            "W_USAGE": "50",
            "W_USERID": "200",
            "W_USEYN": "90",
            "W_VALID": "90",
            "W_VENDORCODE": "150",
            "W_VENDORID": "160",
            "W_VENDORNAME": "200",
            "W_VIEWYN": "90",
            "W_VISIBLE": "10",
            "W_VIVN": "200",
            "W_VIVNS": "200",
            "W_VOCID": "160",
            "W_VOCTYPE": "200",
            "W_WAREHOUSECODE": "100",
            "W_WAREHOUSEID": "160",
            "W_WAREHOUSELOCATIONID": "160",
            "W_WAREHOUSENAME": "150",
            "W_WAREHOUSETYPE": "100",
            "W_WIPSEQUENCE": "50",
            "W_WORKCENTERCODE": "100",
            "W_WORKCENTERID": "160",
            "W_WORKCENTERNAME": "150",
            "W_WORKDATE": "170",
            "W_WORKER": "100",
            "W_WORKYN": "100",
            "W_WOSEQUENCE": "50",
            "W_ZHCN": "200",
            "W_ZHCNS": "200",
            "W_CHKUSEYN": "30",
            "W_BETWEENPLANDATE": "180",
            "W_BETWEENWORKDATE": "180",
            "W_EMPPHOTO": "130",
            "W_SHIPPINGDATE": "180",
            "W_VIEWPARTNUMBER": "150",
            "W_CONDITIONITEMCODE" : "100",
            "W_PARTNAME": "180",
            "W_MAKER": "150",
            "W_MODEL":"150",
            "W_CARTYPE":"100",

            "W_REPAIRDATE": "100",
            "W_REPAIRCONTENT": "300",
            "W_PARTSPEC": "150",
            "W_PARTCHANGEQUANTITY": "100",
            "W_REPAIRPERIOD": "100",
            "W_REPAIRVENDOR": "100",
            "W_REPAIRWORKER": "100",
            "W_CALIBRATIONDATE": "120",
            "W_NEXTCALIBRATIONDATE": "120",
            "W_CALIBRATIONREPORT": "150",
            "W_INDEXNUMBER": "100",

            "W_PRODUCTSPECTYPE": "100",
            "W_EXTERNALDIAMETER": "120",
            "W_INTERNALDIAMETER": "120",
            "W_THICKNESS": "120",
            "W_METERPERWEIGHT":"120",
            "W_CENTIMETERPERWEIGHT":"120",

            "W_BOXQUANTITY": "120",

            "W_CUSTOMER": "150",
            "W_WORKOPERATIONSHEETPHOTO": "120",
            "W_EQUIPMENTPHOTO" : "120",

            "W_CUSTOMERNAME": "160",

            "W_VENDORGRADE": "100",
            "W_VENDORLOTNUMBER": "100",
            "W_PALLETWEIGHT": "120",
            "W_PALLETCOUNT": "120",
            "W_TOTALPALLETWEIGHT": "120",

            "W_MATERIALREPORTTYPE": "90",
            "W_REPORTDATE": "100",
            "W_INSPECTOR":"120",
            "W_REPORTFILE": "100",
            "W_REMARK":"200",

            "W_LABELYN": "100",
            "W_ADDPRINTYN": "100",

            "W_MAINTENANCECODE": "100",
            "W_MAINTENANCETYPE": "100",
            "W_MAINTENANCECONTENT": "350",
            "W_MAINTENANCECYCLE": "150",
            "W_BASEDATE": "170",
            "W_FIRSTMAINTENANCEDATE": "150",
            "W_NEXTMAINTENANCEDATE": "150",

            "W_CONDITIONITEMGROUPNAME": "150",
            "W_CONDITIONITEMNAME": "100",
            "W_INSPECTIONCLASSIFYNAME": "150",

            "W_DAY1": "40",
            "W_DAY2": "40",
            "W_DAY3": "40",
            "W_DAY4": "40",
            "W_DAY5": "40",
            "W_DAY6": "40",
            "W_DAY7": "40",
            "W_DAY8": "40",
            "W_DAY9": "40",
            "W_DAY10": "40",
            "W_DAY11": "40",
            "W_DAY12": "40",
            "W_DAY13": "40",
            "W_DAY14": "40",
            "W_DAY15": "40",
            "W_DAY16": "40",
            "W_DAY17": "40",
            "W_DAY18": "40",
            "W_DAY19": "40",
            "W_DAY20": "40",
            "W_DAY21": "40",
            "W_DAY22": "40",
            "W_DAY23": "40",
            "W_DAY24": "40",
            "W_DAY25": "40",
            "W_DAY26": "40",
            "W_DAY27": "40",
            "W_DAY28": "40",
            "W_DAY29": "40",
            "W_DAY30": "40",
            "W_DAY31": "40",

            "W_SAMPLECOUNT": "80",

            "W_WORKSTARTTIME": "150",
            "W_WORKENDTIME": "150",

            "W_UNITNAME": "100",

            "W_INBOUNDINSPECTIONREPORT": "100",

            "W_INSPECTIONRESULT1": "150",
            "W_INSPECTIONRESULT2": "150",
            "W_INSPECTIONRESULT3": "150",
            "W_INSPECTIONRESULT4": "150",
            "W_INSPECTIONRESULT5": "150",
            "W_INSPECTIONRESULT6": "150",
            "W_INSPECTIONRESULT7": "150",
            "W_INSPECTIONRESULT8": "150",
            "W_INSPECTIONRESULT9": "150",
            "W_INSPECTIONRESULT10": "150",
            "W_INSPECTRESULT": "80",

            "W_OUTPARTNUMBER": "100",
            "W_OUTPRODUCTNAME": "200",

            "W_CHECKITEMCODE": "100",
            "W_CHECKITEMNAME": "80",
            "W_CHECKITEMDETAIL": "250",
            "W_NORMALSTATE": "170",
            "W_CHECKCYCLE": "100",
            "W_CHECKCYCLENAME": "70",


            "W_EQUIPMENT": "150",
            "W_NOPDAY" : "130",
            "W_NOPSTARTTIME": "200",
            "W_NOPENDDATE": "200",
            "W_NOPCODE": "120",
            "W_NOPREASON": "300",
            "W_NopResultTime": "120",

            "W_PARTNUMBERPHOTO": "150",
			
			"W_UNITCOST": "100",
			"W_FROMDATE": "100",
			"W_TODATE": "100",

            "W_INBOUNDTYPE": "100",
            "W_VENDORLOTNUMBER": "100",
            "W_GOODQUANTITY": "100",
            "W_DEFECTQUANTITY": "100"
        }
    })
});