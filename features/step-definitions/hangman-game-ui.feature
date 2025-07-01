Feature: Playing Hangman UI
  Try some letters!

@winning
Scenario Outline: Lets win
    Given word with UI is "<word>"
    When I press the buttons for "<letters>" 
    Then the message should be "<answer>"

    Examples:
    | word | letters  | answer |
    | auto | AUTO     | WON    |
    | pila | PILA     | WON    |
    | lote | LOTE     | WON    |
    | cero | CERO     | WON    |
