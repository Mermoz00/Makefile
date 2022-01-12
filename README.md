# Ibexa Flex website skeleton

This is a Symfony Flex website skeleton allowing installation of all editions of
[Ibexa DXP](https://www.ibexa.co/products) and Ibexa Open Source.

## Installation

1. For installation instructions of Ibexa DXP see either
    [the official documentation](https://doc.ibexa.co/) or packages for specific editions:
    * [Ibexa Content](https://github.com/ibexa/content)
    * [Ibexa Experience](https://github.com/ibexa/experience)
    * [Ibexa Commerce](https://github.com/ibexa/commerce)

2. use my Makefile to simplify the rest of installation
   ```
   $ git clone git@github.com:Mermoz00/Makefile.git 
   ```
3. move the Makefile in Makefile at the root of your project
   ```
   $cp tempfile/* .
   $rm -rf tempfile/
   ```
4. Modify the Makefile to your needs. 
5. run the following commando
   ```
   $ make init
   $ make db name=dbname
   ```
6. To start ``` make up ``` or to stop ``` make down ```  the server

 

