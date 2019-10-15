<?php
class Celebrity{
    public function __construct() {
        $this->name = null;
        $this->photo = null;
        $this->earnings = null;
        $this->age = null;
        $this->citizenship = null;
        $this->events = [];
    }

    public function fromArray($array) {
        $this->name     = $array['name'];
        $this->photo    = $array['photo'];
        $this->earnings = $array['earnings'];
        $this->age      = $array['age'];
        $this->events   = $array['events'];
    }
}