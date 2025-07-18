Feature: Displaying right letters!

@right_letters
Scenario Outline: Displaying correct letters when pressing buttons
    Given word is "<word>"
    When I press the buttons for "<letters>" 
    Then word display should look like "<answer>"

    Examples:
    | word | letters  | answer |
    | AUTO | AT       | A_T_   |
    | PILA | L        | __L_   |
    | LOTE | OTE      | _OTE   |
    | CERO |          | ____   |
