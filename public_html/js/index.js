/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


var jpdbBaseURL = "https://api.login2explore.com:5577";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml";

var studentDBName = "SCHOOL-DB";
var studentRelationName = "STUDENT-TABLE";

var connToken = "90933400|-31949151429527333|90904455";

$("#rollNo").focus();


function saveRecNo2LS(jsonObj) {
    var lvData = JSON.parse(jsonObj.data);
    localStorage.setItem("recno", lvData.rec_no);
}


function getRollNoAsJsonObj() {

    var rollNo = $("#rollNo").val();

    var jsonStr = {
        rollNo: rollNo
    };

    return JSON.stringify(jsonStr);
}


function fillData(jsonObj) {

    saveRecNo2LS(jsonObj);

    var record = JSON.parse(jsonObj.data).record;

    $("#fullName").val(record.fullName);
    $("#studentClass").val(record.class);
    $("#birthDate").val(record.birthDate);
    $("#address").val(record.address);
    $("#enrollmentDate").val(record.enrollmentDate);

}


function resetForm() {

    $("#rollNo").val("");
    $("#fullName").val("");
    $("#studentClass").val("");
    $("#birthDate").val("");
    $("#address").val("");
    $("#enrollmentDate").val("");

    $("#rollNo").prop("disabled", false);

    $("#fullName").prop("disabled", true);
    $("#studentClass").prop("disabled", true);
    $("#birthDate").prop("disabled", true);
    $("#address").prop("disabled", true);
    $("#enrollmentDate").prop("disabled", true);

    $("#save").prop("disabled", true);
    $("#update").prop("disabled", true);
    $("#reset").prop("disabled", true);

    $("#rollNo").focus();

}


function validateData() {

    var rollNo = $("#rollNo").val();
    var fullName = $("#fullName").val();
    var studentClass = $("#studentClass").val();
    var birthDate = $("#birthDate").val();
    var address = $("#address").val();
    var enrollmentDate = $("#enrollmentDate").val();


    if (rollNo === "") {
        alert("Roll No missing");
        $("#rollNo").focus();
        return "";
    }


    if (fullName === "") {
        alert("Full Name missing");
        $("#fullName").focus();
        return "";
    }


    if (studentClass === "") {
        alert("Class missing");
        $("#studentClass").focus();
        return "";
    }


    if (birthDate === "") {
        alert("Birth Date missing");
        $("#birthDate").focus();
        return "";
    }


    if (address === "") {
        alert("Address missing");
        $("#address").focus();
        return "";
    }


    if (enrollmentDate === "") {
        alert("Enrollment Date missing");
        $("#enrollmentDate").focus();
        return "";
    }


    var jsonStrObj = {

        rollNo: rollNo,
        fullName: fullName,
        class: studentClass,
        birthDate: birthDate,
        address: address,
        enrollmentDate: enrollmentDate

    };

    return JSON.stringify(jsonStrObj);

}


function getStudent() {

    var rollNo = $("#rollNo").val();

    if (rollNo === "") {
        return;
    }

    var rollNoJsonObj = getRollNoAsJsonObj();

    var getRequest = createGET_BY_KEYRequest(
        connToken,
        studentDBName,
        studentRelationName,
        rollNoJsonObj
    );

    jQuery.ajaxSetup({ async: false });

    var resJsonObj = executeCommandAtGivenBaseUrl(
        getRequest,
        jpdbBaseURL,
        jpdbIRL
    );

    jQuery.ajaxSetup({ async: true });


    if (resJsonObj.status === 400) {

        $("#fullName").prop("disabled", false);
        $("#studentClass").prop("disabled", false);
        $("#birthDate").prop("disabled", false);
        $("#address").prop("disabled", false);
        $("#enrollmentDate").prop("disabled", false);

        $("#save").prop("disabled", false);
        $("#reset").prop("disabled", false);

        $("#fullName").focus();

    }

    else if (resJsonObj.status === 200) {

        $("#rollNo").prop("disabled", true);

        fillData(resJsonObj);

        $("#fullName").prop("disabled", false);
        $("#studentClass").prop("disabled", false);
        $("#birthDate").prop("disabled", false);
        $("#address").prop("disabled", false);
        $("#enrollmentDate").prop("disabled", false);

        $("#update").prop("disabled", false);
        $("#reset").prop("disabled", false);

        $("#fullName").focus();

    }

    else {

        alert("Error retrieving student data");
        console.log(resJsonObj);

    }

}


function saveData() {

    var jsonStrObj = validateData();

    if (jsonStrObj === "") {
        return;
    }

    var putRequest = createPUTRequest(
        connToken,
        jsonStrObj,
        studentDBName,
        studentRelationName
    );

    jQuery.ajaxSetup({ async: false });

    var resJsonObj = executeCommandAtGivenBaseUrl(
        putRequest,
        jpdbBaseURL,
        jpdbIML
    );

    jQuery.ajaxSetup({ async: true });

    console.log(resJsonObj);

    if (resJsonObj.status === 200) {
        alert("Student record saved successfully");
        resetForm();
    } else {
        alert("Error saving student record");
    }

}


function updateData() {

    var jsonStrObj = validateData();

    if (jsonStrObj === "") {
        return;
    }

    var updateRequest = createUPDATERecordRequest(
        connToken,
        jsonStrObj,
        studentDBName,
        studentRelationName,
        localStorage.getItem("recno")
    );

    jQuery.ajaxSetup({ async: false });

    var resJsonObj = executeCommandAtGivenBaseUrl(
        updateRequest,
        jpdbBaseURL,
        jpdbIML
    );

    jQuery.ajaxSetup({ async: true });

    console.log(resJsonObj);

    if (resJsonObj.status === 200) {
        alert("Student record updated successfully");
        resetForm();
    } else {
        alert("Error updating student record");
    }

}


$("#rollNo").focus();
