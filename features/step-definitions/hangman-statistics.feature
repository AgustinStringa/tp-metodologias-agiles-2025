Feature: display current game stats after game ends

  @statistics
  Scenario: Show statistics when game ends
    Given word is "<word>"
    When I press the buttons for "<letters>"
    Then the message should be "<message>"
    And I should see the stats "<stats>"

    Examples:
    | word      | letters    | message           | stats                                            |
    | CAMIONETA | ZXULQWF    | 💀 ¡PERDISTE! 💀 | ✅ Aciertos: 0 # ❌ Errores: 7 # 🎯 Intentos: 7 |
    | COCODRILO | AFLCODRI   | 🎉 ¡GANASTE! 🎉  | ✅ Aciertos: 6 # ❌ Errores: 2 # 🎯 Intentos: 8 |
    | ARBOL     | AEIUFJKLP  | 💀 ¡PERDISTE! 💀 | ✅ Aciertos: 2 # ❌ Errores: 7 # 🎯 Intentos: 9 |
    | PILETA    | ATIPLJE    | 🎉 ¡GANASTE! 🎉  | ✅ Aciertos: 6 # ❌ Errores: 1 # 🎯 Intentos: 7 |
