Feature: Displaying right letters!

@right_letters
Scenario Outline: Displaying correct letters when pressing buttons
    Given word with UI is "<word>"
    When I press the buttons for "<letters>" 
    Then word display should look like "<answer>"

    Examples:
    | word | letters  | answer |
    | auto | AT       | A_T_   |
    | pila | L        | __L_   |
    | lote | OTE      | _OTE   |
    | cero |          | ____   |
