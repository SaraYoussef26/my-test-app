
import Counter from "./Counter";
import WelcomeMessage from "./components/WelcomeMessage";
import EmployeeCard from "./components/EmployeeCard";

export default function Home() {
  return (
    <main>
      <WelcomeMessage />

      <EmployeeCard
        name="Alice Johnson"
        role="Sales Manager"
        email="test@test.com"
      />

      <Counter />
      <Counter />
    </main>
  );
}

