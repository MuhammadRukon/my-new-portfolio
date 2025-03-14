import { Button } from '@repo/ui/button';
import { Card } from '@repo/ui/card';

export default function Home() {
  return (
    <div className="">
      My First Turborepo App
      <Card title="Card Title" href="https://github.com/muhammadrukon">
        Card Content
      </Card>
      <Button className="">Open alert</Button>
    </div>
  );
}
