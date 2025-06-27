Feature: Playing Hangman
  Try some letters!

Scenario Outline: Lets win
    Given word is "<word>"
    When I try "<letters>" 
    Then I should see "<answer>"

  Examples:
    | word | letters  | answer |
    | auto | AUTO     | WON    |
    | pila | PILA     | WON    |
    | lote | LOTE     | WON    |
    | cero | CERO     | WON    |


Scenario Outline: Lets lose
    Given word is "<word>"
    When I try "<letters>"
    Then I should see "<answer>"

  Examples:
    | word | letters   | answer |
    | auto | ZPWKLMN   | LOST   |
    | pila | WRYTFOQ   | LOST   |
    | lote | AUIFJWÑ   | LOST   |
    | cero | AIUSPLJ   | LOST   |
