// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

  var show1 = 0;
  var show2 = 0;
  var rps = false;
  var rpsls = false;

  function toggleOG() {
    var againstOpponent = document.getElementsByClassName("againstOpponent")[0];
    var lizard = document.getElementsByClassName("rpsls")[0];
    var spock = document.getElementsByClassName("rpsls")[1];
    var ogRPS = document.getElementsByClassName("ogRPS")[0];
    show1 += 1;

    if (show1 % 2 == 1) {
        if (show2 % 2 == 1) {
            ogRPS.style.display = 'inline';
        }
        againstOpponent.style.display = 'inline';
        lizard.style.display = 'none';
        spock.style.display = 'none';
        rps = true;
    }
    else {
        againstOpponent.style.display = 'none';
        ogRPS.style.display = 'none';
        rps = false;
    }
  }

  function toggleNew() {
    var againstOpponent = document.getElementsByClassName("againstOpponent")[0];
    var lizard = document.getElementsByClassName("rpsls")[0];
    var spock = document.getElementsByClassName("rpsls")[1];
    var ogRPS = document.getElementsByClassName("ogRPS")[0];

    show1 += 1;
    

    if (show1 % 2 == 1) {
         if (show2 % 2 == 1) {
            ogRPS.style.display = 'inline';
        }
        againstOpponent.style.display = 'inline';
        lizard.style.display = 'inline';
        spock.style.display = 'inline';
        rpsls = true;
    }
    else {
        againstOpponent.style.display = 'none';
        lizard.style.display = 'none';
        spock.style.display = 'none';
        ogRPS.style.display = 'none';
        rpsls = false;
    }
  }

  function toggle_against_opponent() {
    var ogRPS = document.getElementsByClassName("ogRPS")[0];
    show2 += 1;
    
    if ((show1 % 2 == 1) && (show2 % 2 == 1)) {
        ogRPS.style.display = 'inline';
    }
    else {
         ogRPS.style.display = 'none';
    }
  }
