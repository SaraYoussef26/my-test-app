interface EmployeeCardProps {
  name: string;
  role: string;
  email: string;
}

export default function EmployeeCard({ name, role, email }: EmployeeCardProps) {
  return (
    <div style={{ border: "1px solid white", padding: "1rem", margin: "1rem" }}>
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{email}</p>
    </div>
  );
}