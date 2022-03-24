$(function () {
    $("#btnAdd").on("click", function () {
        var name, country, id;
        id = $("#txtId").val();
        name = $("#txtName").val();
        country = $("#txtCountry").val();

        var edit =
            "<i class='fa fa-pencil edit' style='font-size:18px; color: rgb(31, 171, 247)' ></>";
        var del =
            "<i class='fa fa-trash delete' style='font-size:18px; color: rgb(243, 59, 59)'></i>";

        if (name == "" || country == "") {
            alert("Name and Country fields required!");
        } else {
            var table =
                "<tr><td>" +
                id +
                "</td><td>" +
                name +
                "</td><td>" +
                country +
                "</td><td>" +
                edit +
                "</td><td>" +
                del +
                "</td></tr>";
            $("#tblCustomers").append(table);
        }
        id = $("#txtId").val("");
        name = $("#txtName").val("");
        country = $("#txtCountry").val("");
        Clear();
    });

    $("#btnUpdate").on("click", function () {
        var name, country, id;
        id = $("#txtId").val();
        name = $("#txtName").val();
        country = $("#txtCountry").val();

        $("#tblCustomers tbody tr")
            .eq($("#hfRowIndex").val())
            .find("td")
            .eq(1)
            .html(name);
        $("#tblCustomers tbody tr")
            .eq($("#hfRowIndex").val())
            .find("td")
            .eq(2)
            .html(country);

        $("#btnAdd").show();
        $("#btnUpdate").hide();
        Clear();
    });

    $("#tblCustomers").on("click", ".delete", function (e) {
        if (confirm("Are you sure want to delete this record!")) {
            $(this).closest("tr").remove();
        } else {
            e.preventDefault();
        }
    });

    $("#btnClear").on("click", function () {
        Clear();
    });

    $("#tblCustomers").on("click", ".edit", function (e) {
        var row = $(this).closest("tr");
        $("#hfRowIndex").val($(row).index());
        var td = $(row).find("td");
        $("#txtId").val($(td).eq(0).html());
        $("#txtName").val($(td).eq(1).html());
        $("#txtCountry").val($(td).eq(2).html());
        $("#btnAdd").hide();
        $("#btnUpdate").show();
    });
});
function Clear() {
    $("#txtId").val("");
    $("#txtName").val("");
    $("#txtCountry").val("");
    $("#hfRowIndex").val("");
}
