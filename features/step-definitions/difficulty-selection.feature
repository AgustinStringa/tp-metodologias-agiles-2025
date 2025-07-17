Feature: Difficulty selection
  Players can choose how hard the words should be.

  @difficulty
  Scenario Outline: Starting game with selected difficulty
    Given I open the settings dialog
    When I choose difficulty "<difficulty>"
    And I press save settings
    Then the game should use a word of "<difficulty>" difficulty

    Examples:
      | difficulty |
      | easy       |
      | medium     |
      | hard       |
