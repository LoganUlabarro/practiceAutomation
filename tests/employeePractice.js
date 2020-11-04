module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
        .maximizeWindow()
    },
    after: browser => {
        browser.end()
    },
    'checkDefaultInfo': browser => {
        browser
            .click('li[name="employee1"]')
            .verify.containsText('#employeeTitle', 'Bernice')
            .verify.containsText('#employeeID', 'ID: 1')
            .verify.value('input[name="phoneEntry"]', '4824931093')
            .verify.value('input[name="titleEntry"]', 'CEO')
            .pause(10)
            .click('li[name="employee2"]')
            .verify.containsText('#employeeTitle', 'Marnie')
            .verify.containsText('#employeeID', 'ID: 2')
            .verify.value('input[name="phoneEntry"]', '3094812387')
            .verify.value('input[name="titleEntry"]', 'CTO')
            .pause(10)
            .click('li[name="employee3"]')
            .verify.containsText('#employeeTitle', 'Phillip')
            .verify.containsText('#employeeID', 'ID: 3')
            .verify.value('input[name="phoneEntry"]', '7459831843')
            .verify.value('input[name="titleEntry"]', 'Manager')
            .pause(10)
            .click('li[name="employee4"]')
            .verify.containsText('#employeeTitle', 'Teresa')
            .verify.containsText('#employeeID', 'ID: 4')
            .verify.value('input[name="phoneEntry"]', '3841238745')
            .verify.value('input[name="titleEntry"]', 'Director of Engineering')
            .pause(10)
            .click('li[name="employee5"]')
            .verify.containsText('#employeeTitle', 'Dollie')
            .verify.containsText('#employeeID', 'ID: 5')
            .verify.value('input[name="phoneEntry"]', '4873459812')
            .verify.value('input[name="titleEntry"]', 'Front-End Developer')
            .pause(10)
            .click('li[name="employee6"]')
            .verify.containsText('#employeeTitle', 'Harriet')
            .verify.containsText('#employeeID', 'ID: 6')
            .verify.value('input[name="phoneEntry"]', '6571249801')
            .verify.value('input[name="titleEntry"]', 'Front-End Developer')
            .pause(10)
            .click('li[name="employee7"]')
            .verify.containsText('#employeeTitle', 'Ruby')
            .verify.containsText('#employeeID', 'ID: 7')
            .verify.value('input[name="phoneEntry"]', '5740923478')
            .verify.value('input[name="titleEntry"]', 'Back-End Developer')
            .pause(10)
            .click('li[name="employee8"]')
            .verify.containsText('#employeeTitle', 'Lou')
            .verify.containsText('#employeeID', 'ID: 8')
            .verify.value('input[name="phoneEntry"]', '8727813498')
            .verify.value('input[name="titleEntry"]', 'Full-Stack Developer')
            .pause(10)
            .click('li[name="employee9"]')
            .verify.containsText('#employeeID', 'ID: 9')
            .verify.containsText('#employeeTitle', 'Eve')
            .verify.value('input[name="phoneEntry"]', '8734567810')
            .verify.value('input[name="titleEntry"]', 'Product Manager')
            .pause(10)
            .click('li[name="employee10"]')
            .verify.containsText('#employeeTitle', 'Lois')
            .verify.containsText('#employeeID', 'ID: 10')
            .verify.value('input[name="phoneEntry"]', '8749823456')
            .verify.value('input[name="titleEntry"]', 'Sales Manager')
            .pause(10)
    },
    'editEmployeeInfo': browser => {
        browser
            .click('li[name="employee1"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Rick Astley')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '2818675309')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Musician')
            .click("#saveBtn")
            .click('li[name="employee2"]')
            .verify.containsText('li[name = "employee1"]', 'Rick Astley')
            .click('li[name="employee1"]')
            .verify.containsText('#employeeTitle', 'Rick Astley')
            .expect.element('input[name="phoneEntry"]').value.to.equal('2818675309')
        browser
            .expect.element('input[name="titleEntry"]').value.to.equal('Musician')
        browser
            // .verify.value('input[name="titleEntry"]', 'Musician') also works
        //Employee 2
            .click('li[name="employee2"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Rick Astley')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '2818675309')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Musician')
            .click("#saveBtn")
            .click('li[name="employee1"]')
            .verify.containsText('li[name = "employee2"]', 'Rick Astley')
            .click('li[name="employee2"]')
            .verify.containsText('#employeeTitle', 'Rick Astley')
            .expect.element('input[name="phoneEntry"]').value.to.equal('2818675309')
        browser
            .expect.element('input[name="titleEntry"]').value.to.equal('Musician')
        browser
            //Employee 3
            .click('li[name="employee3"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Rick Astley')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '2818675309')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Musician')
            .click("#saveBtn")
            .click('li[name="employee2"]')
            .verify.containsText('li[name = "employee3"]', 'Rick Astley')
            .click('li[name="employee3"]')
            .verify.containsText('#employeeTitle', 'Rick Astley')
            .expect.element('input[name="phoneEntry"]').value.to.equal('2818675309')
        browser
            .expect.element('input[name="titleEntry"]').value.to.equal('Musician')
        browser
            //Employee 4
            .click('li[name="employee4"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Rick Astley')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '2818675309')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Musician')
            .click("#saveBtn")
            .click('li[name="employee2"]')
            .verify.containsText('li[name = "employee4"]', 'Rick Astley')
            .click('li[name="employee4"]')
            .verify.containsText('#employeeTitle', 'Rick Astley')
            .expect.element('input[name="phoneEntry"]').value.to.equal('2818675309')
        browser
            .expect.element('input[name="titleEntry"]').value.to.equal('Musician')
        browser
            //Employee 5
            .click('li[name="employee5"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Rick Astley')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '2818675309')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Musician')
            .click("#saveBtn")
            .click('li[name="employee2"]')
            .verify.containsText('li[name = "employee5"]', 'Rick Astley')
            .click('li[name="employee5"]')
            .verify.containsText('#employeeTitle', 'Rick Astley')
            .expect.element('input[name="phoneEntry"]').value.to.equal('2818675309')
        browser
            .expect.element('input[name="titleEntry"]').value.to.equal('Musician')
        browser
            //Employee 6
            .click('li[name="employee6"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Rick Astley')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '2818675309')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Musician')
            .click("#saveBtn")
            .click('li[name="employee2"]')
            .verify.containsText('li[name = "employee6"]', 'Rick Astley')
            .click('li[name="employee6"]')
            .verify.containsText('#employeeTitle', 'Rick Astley')
            .expect.element('input[name="phoneEntry"]').value.to.equal('2818675309')
        browser
            .expect.element('input[name="titleEntry"]').value.to.equal('Musician')
        browser
            //Employee 7
            .click('li[name="employee7"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Rick Astley')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '2818675309')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Musician')
            .click("#saveBtn")
            .click('li[name="employee2"]')
            .verify.containsText('li[name = "employee7"]', 'Rick Astley')
            .click('li[name="employee7"]')
            .verify.containsText('#employeeTitle', 'Rick Astley')
            .expect.element('input[name="phoneEntry"]').value.to.equal('2818675309')
        browser
            .expect.element('input[name="titleEntry"]').value.to.equal('Musician')
        browser
            //Employee 8
            .click('li[name="employee8"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Rick Astley')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '2818675309')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Musician')
            .click("#saveBtn")
            .click('li[name="employee2"]')
            .verify.containsText('li[name = "employee8"]', 'Rick Astley')
            .click('li[name="employee8"]')
            .verify.containsText('#employeeTitle', 'Rick Astley')
            .expect.element('input[name="phoneEntry"]').value.to.equal('2818675309')
        browser
            .expect.element('input[name="titleEntry"]').value.to.equal('Musician')
        browser
            //Employee 9
            .click('li[name="employee9"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Rick Astley')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '2818675309')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Musician')
            .click("#saveBtn")
            .click('li[name="employee2"]')
            .verify.containsText('li[name = "employee9"]', 'Rick Astley')
            .click('li[name="employee9"]')
            .verify.containsText('#employeeTitle', 'Rick Astley')
            .expect.element('input[name="phoneEntry"]').value.to.equal('2818675309')
        browser
            .expect.element('input[name="titleEntry"]').value.to.equal('Musician')
        browser
            //Employee 10
            .click('li[name="employee10"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Rick Astley')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '2818675309')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Musician')
            .click("#saveBtn")
            .click('li[name="employee2"]')
            .verify.containsText('li[name = "employee10"]', 'Rick Astley')
            .click('li[name="employee10"]')
            .verify.containsText('#employeeTitle', 'Rick Astley')
            .expect.element('input[name="phoneEntry"]').value.to.equal('2818675309')
        browser
            .expect.element('input[name="titleEntry"]').value.to.equal('Musician')
            
        
    },
    'cancelChanges': browser => {
        browser
            .click('li[name="employee1"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Rick Astley')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '2818675309')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Musician')
            .click('button[name="cancel"]')
            .verify.containsText('#employeeTitle', 'Bernice')
    },
    //test adding and editing a new employee
    'addEmployee': browser => {
        browser
            .click('li[name="addEmployee"]')
            .click('li[name="employee11"]')
            //check it's ID to be sure it is positive and going up
            .verify.containsText('#employeeID', 'ID: 11')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Rick Astley')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '2818675309')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Musician')
            .click("#saveBtn")
            .click('li[name="employee1"]')
            .click('li[name="employee11"]')
            .verify.containsText('#employeeTitle', 'Rick Astley')
            .verify.value('input[name = "phoneEntry"]', '2818675309')
            .verify.value('input[name="titleEntry"]', 'Musician')
            .pause(1000)
    }
    /*,

    'addManyEmployees': browser => {
        browser
        .pause(5000)
        for (var x = 0; x <= 15; x++) {
        browser
            //.click('li[name="addEmployee"]')
            .useXpath()
            .click('//li[contains(text()," + Add Employee ")]')
            .pause(1000)
         }
        browser
         .pause(1000)
    },
    'checkErrorMessages': browser => {
        browser
            .click('li[name="employee1"]')
            .clearValue('input[name="nameEntry"]')
            .click("#saveBtn")
            .verify.containsText('.errorCard', 'must')
    }*/
}