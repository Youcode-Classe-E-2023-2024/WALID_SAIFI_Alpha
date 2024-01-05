<?php

class notifications
{
    public  $id;
    public $id_user;
    public $contener;
    public $date;

    public  function __construct($id)
    {
        global $db;
        $result = $db->query("SELECT * FROM notifications WHERE id = '$id'");
        $room = $result->fetch_assoc();
        $this->id = $room['id'];
        $this->contener = $room['contener'];
        $this->date = $room['date'];

    }
    static  public  function   getAll_notifications(){


    }

}