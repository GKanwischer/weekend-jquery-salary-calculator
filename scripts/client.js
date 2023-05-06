let monthSal = 0;
const monthLimit = 20000;

// sets up jquery
$(function(){
    // click event for submitButton
    $('#submitButton').on( 'click', appendTable );
    $('#deleteButton').on( 'click', deleteRow );
});

// adds items to the table upon button click
function appendTable(){
    // set variable equal to input fields
    const tableBody = $('tbody');
    const firstName = $('#firstIn');
    const lastName = $('#lastIn');
    const idNum = $('#idNumIn');
    const title = $('#titleIn');
    const annSal = $('#annSalIn');

    // stops and alerts the user if the form is incomplete
    if(
        firstName.val() === '' ||
        lastName.val() === '' ||
        idNum.val() === '' ||
        title.val() === '' ||
        annSal.val() === '' 
    ){
        alert('Please complete inputs')
        return;
    };

    // variable to hold the table row we want appended
    const content = `
    <tr>
        <td>${firstName.val()}</td>
        <td>${lastName.val()}</td>
        <td>${idNum.val()}</td>
        <td>${title.val()}</td>
        <td>${annSal.val()}</td>
        <td>
            <button class="deleteBtm">Delete</button>
        </td>
    </tr>`;
    // add the inputted content into the table
    tableBody.append(content);
    // set the value the input fields to an empty string after 'sumbitting'
    firstName.val('');
    lastName.val('');
    idNum.val('');
    title.val('');
    annSal.val('');
}
// function to remove row after a delete button is clicked
function deleteRow(event) {
    // set a variable to hold the target
    const deleteBtn = $(event.target);
    // remove the closest row to the target
    deleteBtn.closest('tr').remove();
}