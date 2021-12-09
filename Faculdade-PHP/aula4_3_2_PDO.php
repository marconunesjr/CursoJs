<?php
PDO {
    public __construct ( string $dsn [, string $username [, string $passwd [, array $options ]]] )
    public beginTransaction ( void ) : bool
    public commit ( void ) : bool
    public errorCode ( void ) : string
    public errorInfo ( void ) : array
    public exec ( string $statement ) : int
    public getAttribute ( int $attribute ) : mixed
    public static getAvailableDrivers ( void ) : array
    public inTransaction ( void ) : bool
    public lastInsertId ([ string $name = NULL ] ) : string
    public prepare ( string $statement [, array $driver_options = array() ] ) : PDOStatement
    public query ( string $statement ) : PDOStatement
    public quote ( string $string [, int $parameter_type = PDO::PARAM_STR ] ) : string
    public rollBack ( void ) : bool
    public setAttribute ( int $attribute , mixed $value ) : bool
    }