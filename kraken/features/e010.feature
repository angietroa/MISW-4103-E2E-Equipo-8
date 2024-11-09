Feature: Crear paginas

@user1 @web
Scenario: E010 - Crear página con Link de spotify
  Given I navigate to page "<url>"
  And I wait for 1 seconds
  When I enter email "<username>"
  And I wait for 1 seconds
  And I enter password "<password>"
  And I wait for 1 seconds
  And I click on sign-in
  And I click on page
  And I click on new page
  And I wait for 2 seconds
  And I enter title "Escenario página - Spotify kraken"
  And I click on text area of page
  And I click on the add tool menu
  And I click on the tool "Spotify"
  And I want to upload a song to the page "https://open.spotify.com/track/71N1Ob14XLnH5JwsmvXhXj?si=d99b678f09b9492b"
  Then I want to publish the changes
  And I wait for 2 seconds