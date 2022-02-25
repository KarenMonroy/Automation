Feature: Scenarios Word Counter

  Scenario: The navigate in Word Counter
    Given a user navigates in Word Counter
    When a user write Hello Hello Hello Hello how are you? in the text field
    Then a user see text 7 words 36 characters

  Scenario: Validate total repeat words
    Given a user click in Keyword Density
    When a user validate total repeat word is hello
    Then the total de repeat word 4 (80%)






