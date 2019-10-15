<?php

$party = [
    'bilbo' => 'Bilbo Baggins',
    'frodo' => 'Frodo Baggins',
    'ring' => 'The One Ring'
];

$party['Gandalf'] = 'Gandalf the Grey';

unset($party['bilbo']);

$party['sam'] = 'Samwise Gamgee';

unset($party['Gandalf']);

$party = leave_hobbiton($party);

$party = go_to_beer($party);

$party = go_to_weathertop($party);

meet_arwen($party);

$party = go_to_rivendell($party);

go_to_moria($party);

go_to_falls_of_rauros($party);

$parties = break_fellowship($party);