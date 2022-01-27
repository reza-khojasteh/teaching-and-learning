/** File  BitRepresatation.java           */
/******************************************/

import java.util.*;

public class BitRepresatation {

	private int i;
	private int j;

	public BitRepresatation(int first, int second) {
		i = first;
		j = second;
	}

	public void showBitwiseOperation() {
		displayBinary("i", i);
		displayBinary("~i", ~i);
		displayBinary("-i", -i);
		displayBinary("j", j);
		displayBinary("i & j", i & j);
		displayBinary("i | j", i | j);
		displayBinary("i ^ j", i ^ j);
		displayBinary("i << 5", i << 5);
		displayBinary("i >> 5", i >> 5);
		displayBinary("(~i) >> 5", (~i) >> 5);
		displayBinary("i >>> 5", i >>> 5);
		displayBinary("(~i) >>> 5", (~i) >>> 5);
	}

	public void displayBinary(String s, int i) {
		System.out.println(s + ", int: " + i + ", binary: ");
		binary(i);
	}

	public void binary(int i) {
		System.out.print("   ");
		for(int j = 31; j >=0; j--)
			if(((1 << j) &  i) != 0)
				System.out.print("1");
			else
				System.out.print("0");
		System.out.println();
	}

	/** main application entry point */
	public static void main(String[] args) {

		BitRepresatation o = new BitRepresatation(2, 5);
		o.showBitwiseOperation();
		
		o.displayBinary("3", 3);
		o.displayBinary("-1", -1);
		o.displayBinary("+1", +1);
		int maxpos = 2147483647;
		o.displayBinary("maxpos", maxpos);
		int maxneg = -2147483648;
		o.displayBinary("maxneg", maxneg);
		
	}
}

