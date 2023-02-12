# **Convention Data Services - Form Challenge**

## Colton Arthur Allen
**Date**: 02/11/23

### Final Product URL: [https://cds-assignment.netlify.app/](https://cds-assignment.netlify.app/)

#### Comments
1. I built this site that can be viewed at [https://cds-assignment.netlify.app/](https://cds-assignment.netlify.app/) with vanilla HTML, CSS, and JavaScript. The only outside library was [Pico.css](https://picocss.com/),  a minimal CSS Framework for semantic HTML to use a base. All html, css, and javascript was written by me and from scratch.
2. I built the application with a mobile-first responsive layout.
3. I also implemented a light/dark mode that takes the user's system settings for this mode as the default, but there is also a toggle to switch between modes in the bottom right corner of the screen.
4. Instead of providing the 4 provided challenges in a separate task/document, I implemented that into the site itself on the "Challenges" page and can be viewed by clicking the 4 different tabs on the following page linked here: [https://cds-assignment.netlify.app/challenges.html](https://cds-assignment.netlify.app/challenges.html)

##### Notes: 
- The provided header for the form was quite a bit too small, so I found the largest one I could find *(about 700px in width)* and just used that as the form header instead of the page header. I hope that's okay. I didn't want to have a super blurry header image.

___

#### Requirements

Build a one page form according to the specifications below. The form will need to validate
according to the business logic below, but is not required to save the data anywhere. You can
use any of the following programming languages: PHP, Classic ASP, HTML/CSS, JavaScript.
Feel free to be as creative as you want.

##### Header:
![CDS Header](http://www.cdsreg.com/assets/NewBuilding_FakeGreenery_v2-1024x552.jpg)

##### Footer:
For assistance please call 555-5555 or email test@test.com.

###### Form details:
First Name - 30 character limit - text field
Last Name - 30 character limit - text field
Phone - 30 character limit - text field
Email - 50 character limit - text field
- place text under field indicating that the field is required in order to receive an email
confirmation

Promo Code - 7 character limit - text field
How did you hear: - dropdown
Social Media
From a friend
Email
Other
**Accept Terms & Conditions - checkbox**
● Text: I agree to the terms and conditions of this event.
● Make the Accept Terms & Conditions a link that pops up a box with the following text:
- All cancellation requests must be received by March 1, 2022
- All cancellation requests are subject to a $100 cancellation fee.
- No one under the age of 16 will be allowed on the show floor.

Business rules:
Require that the following fields are filled in:
- First Name
- Last Name
- Phone
- Email

Require phone to only accept digits
Require email to validate that an email was entered
Require promo code to validate that only alpha and numeric characters are entered
If promo code is not filled in require them to enter how did you hear
If they select other for how did you hear have an open text box that says please specify and
require that they fill it in
Require that the terms and conditions box be checked before continuing.
Once all fields are filled in correctly please display a message at the top of the screen that says
“You have filled in all the fields correctly.” Have the message display in a green box.

**CSS**:
Make the First Name and Last Name fields 14px, bold. Make the email field italics. Please make
all other fields 12px.
For required fields please add an asterisk (*) after the field name and make it bold and red.
Make the footer text 18px, bold.
Create a header at the top of the form with the text: Contact Details.

___

#### Sample Code Challenges

Please fix the following code:
**Example 1:**
```
<form id="Form1" name="Form1" action="regInfo_p.asp method="post"
class="form-horizontal">
    <input type="hidden" name="sc" id="sc" value="<%=sc%>" />
<form>
```

**Example 2:**
```
$(HandicapBtn").on("click", function(evt) {
    if ($(this).prop("checked")) {
        $("[id^=Row_HandicapText]").show();
        $("#HandicapText").addClass("required");
    } else {
        $("[id^=Row_HandicapText]").hide;
        $("#HandicapText").val("").removeClass("required");
    }
});
```

**Example 3:**
```
SELECT
        [name] AS valuefield
        ,[longname] AS labelfield
        ,state_id
        regionId
    FROM TAB_SS_StateDefinitions
    WHERE(@Country = ''
    OR Country = @Country)
    AND Name <> XX
    ORDER BY
        labelfield
```

**Example 4:**
```
Write a select statement from the TAB_Reg table that selects firstname, lastname, optin and
email where optin equals 1 and order the results alphabetically:
```