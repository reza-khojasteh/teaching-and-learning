//This program lists all the file objects from the folder given in arg[0], 
//with the folder name in front of them.
//To obtain only the file names you have to invoke on object f, the getName() method
import java.io.File;

public class ListFiles {

	public static void main(String args[]){
		File file = new File(args[0]);
		File[] files = file.listFiles();
		
//		for(File f: files){
//			System.out.println(f);
//		}
		
		for(File f: files){
			System.out.println(f.getName());
		}
	}
}
