//The interface FilenameFilter allows instances of classes that implement this interface 
//to be used to filter filenames.
//The method "boolean accept(File dir, String name)" tests if a specified file 
//should be included in a file list. 
//Parameters: dir - the directory in which the file was found, and name - the name of the file. 
//For example: "java NameFilter JAC444 .java" will print all the java files from the folder JAC444

import java.io.*;

public class NameFilter {

	public static void main(String[] args){
		File file = new File(args[0]);
		
		String[] files = file.list(new FilenameFilter() {

			public boolean accept(File dir, String name) {
				if(name.toLowerCase().endsWith(args[1]))
					return true;
				else 
					return false;
			}
		});
		
		if (files != null)
			for(String f:files){
				System.out.println(f);
			}
	}
}
