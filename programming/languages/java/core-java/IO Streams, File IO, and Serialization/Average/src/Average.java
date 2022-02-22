//There are two columns in “score.txt”.
//The first column shows the names of students who took the exam.
//Each name consists of one word (no spaces).
//The second column stores the scores of corresponding students.
//The two columns are separated by a tab character.

import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class Average {
	public static void main(String[] args) throws IOException {
		File f = new File("score.txt");
		Scanner in = new Scanner(f);
		String s;
		double sum = 0.0;
		int count = 0;

		while (in.hasNext()) {
			s = in.next();
			int score = in.nextInt();
			sum += score;
			count++;
		}

		if (count > 0)
			System.out.println(sum / count);
	}
}
