Feature: Displaying right letters!

@right_letters
Scenario Outline: Lets win
    Given word with UI is "<word>"
    When I press the buttons for "<letters>" 
    Then word display should look like "<answer>"

    Examples:
    | word | letters  | answer |
    | auto | AT       | A_T_   |
    | pila | L        | __L_   |
    | lote | OTE      | _OTE   |
    | cero |          | ____   |
