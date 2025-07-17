Feature: Get solution

Scenario Outline: Show the solution after losing the game
    Given word with UI is "<word>"
    When I press the buttons for "<letters>"
    Then I should lose the game and see the solution "<word>"

    Examples:
    | word    | letters |
    | BANANA  | FJKLWTR |
    | MANZANA | TLKEIOU |
    | PERA    | ZYXTLMN |
