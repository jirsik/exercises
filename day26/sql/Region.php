<?php
class Region
{
    public $id = null;
    public $name = null;
    public $slug = null;

    public function insert()
    {
        $query = 'INSERT INTO `region` (`name`, `slug`) VALUES ( ?, ?);';

        insert($query, [$this->name, $this->slug]);

        $this->id = last_insert_id();
    }

    public function update()
    {
        if (!$this->id) {
            return false;
        } else {
            $query = "UPDATE `region`
            SET `name` = ?,
             `slug` = ?,
             `id` = ?
            WHERE `name` = 'Central Africa'";

            update($query, [$this->name, $this->slug, $this->id]);
        }
        
    }
}