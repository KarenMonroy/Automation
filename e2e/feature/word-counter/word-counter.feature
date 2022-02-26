Feature: Scenarios Word Counter

  Scenario: The navigate in Word Counter
    Given a user navigates in Word Counter
    When a user write Hello Hello Hello Hello how are you? in the text field
    Then a user see text 7 words 36 characters

  Scenario: Validate total repeat words
    Given a user click in Keyword Density
    When a user validate total repeat word is hello
    Then the total de repeat word 4 (80%)

  Scenario: Validate characters without spaces
    Given a user write HelloHelloHello in the text field
    Then a user see text 1 words 15 characters
    When a user click in Keyword Density
    Then a user validate total repeat word is hellohellohello
    And the total de repeat word 1 (100%)

  Scenario: Validate characters only spaces
    Given a user write "     " in the text field
    Then a user see text 0 words 7 characters

  Scenario: Validate specifics characters
    Given a user write #%?¡-+)/('!"°#$&%/ in the text field
    Then a user see text 1 words 18 characters

  Scenario: Validate specifics characters without spaces
    Given a user write #%?¡-+)/ ('!"°# $&%/ in the text field
    Then a user see text 3 words 20 characters


