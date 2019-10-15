<?php

function leave_hobbiton($party)
{
    $toMerge = [
        'merry' => 'Meriadoc Brandybuck',
        'pippin' => 'Peregrin Took'
    ];
    return array_merge($party, $toMerge);
}

function go_to_beer($party)
{
    $party['strider'] = 'Strider';
    return $party;
}

function go_to_weathertop($party)
{
    return array_merge($party, [
        'Witch King of Angmar',
        'Nazgûl #2',
        'Nazgûl #3',
        'Nazgûl #4',
        'Nazgûl #5',
        'Nazgûl #6',
        'Nazgûl #7',
        'Nazgûl #8',
        'Nazgûl #9'
    ]);
}

function meet_arwen(&$party)
{
    $party['arwen'] = 'Arwen Undómiel';
    array_splice($party, -10, 9);
    //return $party;
}

function go_to_rivendell($party)
{
    unset($party['arwen']);
    $party = array_merge($party, [
        'gandalf' => 'Gandalf the Grey',
        'boromir' => 'Boromir',
        'legolas' => 'Legolas',
        'gimli' => 'Gimli'
    ]);
    $party['strider'] = 'Aragorn';
    return $party;
}

function go_to_moria(&$party)
{
    unset($party['gandalf']);
}

function go_to_falls_of_rauros(&$party)
{
    $party = array_merge($party, array_fill(0, 1000, 'Orc'));
    unset($party['boromir']);
}

function break_fellowship($party)
{
    $mordor_party = [];
    $mordor_party['frodo']= $party['frodo'];
    $mordor_party['sam']= $party['sam'];
    $mordor_party['ring']= $party['ring'];

    $hunting_party = [];
    $hunting_party['strider'] = $party['strider'];
    $hunting_party['legolas'] = $party['legolas'];
    $hunting_party['gimli'] = $party['gimli'];

    $hungry_party = [];
    $hungry_party = array_diff_key($party, $mordor_party, $hunting_party);


    return [$mordor_party, $hunting_party, $hungry_party];
}