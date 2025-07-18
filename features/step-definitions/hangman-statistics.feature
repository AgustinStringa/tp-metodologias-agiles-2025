Feature: display current game stats after game ends


  @statistics
  Scenario: Mostrar estadísticas después de perder
    Given word with UI is "TEST"
    When I press the buttons for "ABCDFGW"
    Then the message should be "💀 ¡PERDISTE! 💀"
    And I should see the stats "✅ Aciertos: 0 | ❌ Errores: 7 | 🎯 Intentos: 7"
