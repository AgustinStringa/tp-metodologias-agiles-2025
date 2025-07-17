Feature: Disable tried letters!

@right_letters
Scenario Outline: Disable a letter button after it's pressed
    Given word with UI is "<word>"
    When I press the buttons for "<letters>"
    Then the button for "<letters>" should look disabled

    Examples:
    | word      | letters |
    | ABURRIDO  | A       |
    | GUITARRA  | G       |
    | FELICIDAD | F       |
    | TRANQUILO | T       | 
