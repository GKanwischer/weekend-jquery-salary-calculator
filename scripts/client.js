let monthSal = 0;
let totalSal = 0;
let annSal = 0;
const monthLimit = 20000;

// sets up jquery
$(function(){
    // click event for submitButton
    $('#submitButton').on( 'click', updateDom );
    $('table').on('click',".deleteButton", deleteRow );
});

// adds items to the table upon button click
function updateDom(){
    // set variables equal to the input fields
    const tableBody = $('tbody');
    const firstName = $('#firstIn');
    const lastName = $('#lastIn');
    const idNum = $('#idNumIn');
    const title = $('#titleIn');
    annSal = $('#annSalIn');

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
        <td data-salary="${annSal.val()}">${annSal.val()}</td>
        <td><button class="deleteButton">Delete</button></td>
    </tr>`;

    // add the inputted salary to the running total
    totalSal += (Number(annSal.val()));

    // calculate the new monthly salary
    monthSal = (totalSal / 12);

    // add the inputted content into the table
    tableBody.append(content);

    // update the total monthly salary on the DOM
    $('#monthlyIncome').text(monthSal);

    // set the value in the input fields to an empty string after 'sumbitting'
    firstName.val('');
    lastName.val('');
    idNum.val('');
    title.val('');
    annSal.val('');
} // end updateDom

// function to remove row after a delete button is clicked
function deleteRow(event) {
    // set a variable to hold the target
    const deleteBtn = $(event.target);

    // set variable to hold which row is targeted by the delete button
    const deletedRow = deleteBtn.closest('tr');

    // set variable to hold the annual salary value of the targeted row
    const deletedSalary = Number(deletedRow.find('td:eq(4)').data('salary'));

    // remove targeted row's salary ammount from the running total
    totalSal -= deletedSalary;

    // calculate new monthly salary
    monthSal = (totalSal / 12);

    // remove the targeted row
    deletedRow.remove();

    // update the total monthly salary on the DOM
    $('#monthlyIncome').text(monthSal);

} // end deleteRow