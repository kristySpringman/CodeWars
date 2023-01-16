import java.io.*;
import java.util.*;

//get first and last name as a string and return initials 

public class AbbreviateTwoWords {

    public static String abbrevName(String name) {
        String firstAndLast[] = null;
        firstAndLast = name.split(" ");

        char first = firstAndLast[0].charAt(0);
        char last = firstAndLast[1].charAt(0);
        String f = "" + first;
        String l = "" + last;

        String initials = f.toUpperCase() + "." + l.toUpperCase();

        System.out.println(initials);

        return initials;
    }
}