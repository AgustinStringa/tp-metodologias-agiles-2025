Feature: Playing Hangman UI
  Try some letters!

@winning
Scenario Outline: Lets win
    Given word with UI is "<word>"
    When I press the buttons for "<letters>" 
    Then the message should be "<answer>"

    Examples:
    | word | letters  | answer           |
    | auto | AUTO     | 🎉 ¡GANASTE! 🎉 |
    | pila | PILA     | 🎉 ¡GANASTE! 🎉 |
    | lote | LOTE     | 🎉 ¡GANASTE! 🎉 |
    | cero | CERO     | 🎉 ¡GANASTE! 🎉 |


@losing
Scenario Outline: Lets lose
    Given word with UI is "<word>"
    When I press the buttons for "<letters>" 
    Then the message should be "<answer>"

  Examples:
    | word | letters   | answer            |
    | auto | ZPWKLMN   | 💀 ¡PERDISTE! 💀 |
    | pila | WRYTFOQ   | 💀 ¡PERDISTE! 💀 |
    | lote | AUIFJWÑ   | 💀 ¡PERDISTE! 💀 |
    | cero | AIUSPLJ   | 💀 ¡PERDISTE! 💀 |


@winning
Scenario Outline: Win is not so easy
    Given word with UI is "<word>"
    When I press the buttons for "<letters>" 
    Then the message should be "<answer>"

  Examples:
    | word     | letters        | answer           |
    | planeta  | PAZXYNLTE      | 🎉 ¡GANASTE! 🎉 |
    | carrito  | CIOUVWKRTA     | 🎉 ¡GANASTE! 🎉 |
    | escuela  | SEZUXLBCHA     | 🎉 ¡GANASTE! 🎉 |
    | relojero | RQWLOZJE       | 🎉 ¡GANASTE! 🎉 |


@losing
Scenario Outline: Try, fail, try again... lose
    Given word with UI is "<word>"
    When I press the buttons for "<letters>" 
    Then the message should be "<answer>"

  Examples:
    | word     | letters         | answer            |
    | camino   | CAMXYZULET      | 💀 ¡PERDISTE! 💀 |
    | naranja  | NARZXYWBTS      | 💀 ¡PERDISTE! 💀 |
    | pelota   | PEXYLOZKQWÑ     | 💀 ¡PERDISTE! 💀 |
    | guitarra | GITZXRMQUKWF    | 💀 ¡PERDISTE! 💀 |

