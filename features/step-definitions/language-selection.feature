Feature: Language selection
  Players can choose the language of the words.

  @language
  Scenario Outline: Starting game with selected language
    Given I open the settings dialog
    When I choose language "<language>"
    And I choose difficulty "medium"
    And I press save settings
    Then the game should use words in "<language>"

    Examples:
      | language   |
      | spanish    |
      | english    |
      | french     |
      | portuguese |
