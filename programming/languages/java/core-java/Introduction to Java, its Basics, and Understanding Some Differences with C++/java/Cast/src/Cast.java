import java.util.*;

public class Cast {

	public static void displayBinary(int i) {
		System.out.println(
				"value: " + i + ", binary: ");
		binary(i);
	}

	public static void binary(int i) {
		System.out.print("   ");
		for(int j = 31; j >=0; j--)
			if(((1 << j) &  i) != 0)
				System.out.print("1");
			else
				System.out.print("0");
		System.out.println();
	}

	public static void main(String[] args) {

		short sh = -129;
		displayBinary(sh);
		byte b = (byte)sh;
		displayBinary(b); 
	}
}

