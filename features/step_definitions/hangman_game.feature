Feature: Playing Hangman
  Try some letters!


@winning
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


@losing
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


@winning
Scenario Outline: Win is not so easy
    Given word is "<word>"
    When I try "<letters>"
    Then I should see "<answer>"

  Examples:
    | word     | letters        | answer |
    | planeta  | PAZXYNLTE      | WON    |
    | carrito  | CIOUVWKRTA     | WON    |
    | escuela  | SEZUXLBCHA     | WON    |
    | relojero | RQWLOZJE       | WON    |

