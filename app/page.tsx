
import Counter from "./Counter";
import WelcomeMessage from "./components/WelcomeMessage";
import EmployeeCard from "./components/EmployeeCard";

export default function Home() {
  return (
    <main>
      <WelcomeMessage />

      <EmployeeCard
        name="Emily Andrew"
        role="Marketing Manager"
        email="Emily.andrew@gmail.com"
      />

      <Counter />
      <Counter initialCount={5} initialStep={2}/>
    </main>
  );
}

