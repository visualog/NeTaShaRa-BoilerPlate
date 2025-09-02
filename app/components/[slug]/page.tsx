import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";
import { FAQ } from "@/components/ui/accordion";

// A simple map to render the component based on the slug
const components: { [key: string]: React.ReactNode } = {
  button: (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Button</h1>
      <div className="flex gap-3">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button loading={true}>Loading</Button>
      </div>
    </section>
  ),
  alert: (
    <section className="space-y-2">
      <h1 className="text-2xl font-bold">Alert</h1>
      <Alert intent="info">정보 메시지입니다.</Alert>
      <Alert intent="warning">경고 메시지입니다.</Alert>
      <Alert intent="error">에러 메시지입니다.</Alert>
      <Alert intent="success">성공 메시지입니다.</Alert>
    </section>
  ),
  accordion: (
    <section className="space-y-2">
      <h1 className="text-2xl font-bold">Accordion</h1>
      <FAQ />
    </section>
  ),
};

interface PageProps {
  params: Promise<{ slug: string }>; // params is now a Promise
}

export default async function ComponentPage({ params }: PageProps) { // Make the function async
  const { slug } = await params; // Await the params Promise
  const component = components[slug]; // Use the awaited slug
  

  if (!component) {
    return <div>Component not found</div>;
  }

  return <div>{component}</div>;
}
