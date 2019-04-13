import javax.swing.plaf.synth.SynthSeparatorUI;

public class Main {

	public static void main(String[] args) {
		
		Student student = new Student("Tanumoy", "aaa");
		
		Student std = student;
		
		std.setName("Changed");
		//student.setName("Changed");
		
		System.out.println("Std : "+std);
		System.out.println("Student : "+student);
	}
}

class Student {
	
	private String name =null;
	private String xxx = null;
	
	Student() {
		
	}
	
	Student(String name, String xxx) {
		this.name = name;
		this.xxx = xxx;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getXxx() {
		return xxx;
	}

	public void setXxx(String xxx) {
		this.xxx = xxx;
	}

	@Override
	public String toString() {
		return "Student [name=" + name + ", xxx=" + xxx + "]";
	}
	
}