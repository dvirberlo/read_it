import { description, repository } from "@/../package.json";
export default function About() {
  return (
    <div className="mt-2 p-1">
      <h2 className="text-2xl">About</h2>
      <p className="p-2">{description}</p>
      <a
        className="cursor-pointer hover:text-primary4 text-content2 p-2"
        href={repository.url}
      >
        Source Code
      </a>
    </div>
  );
}
