import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <Card className="bg-white dark:bg-primary/5 mt-10 text-black dark:text-white border-none p-4 mb-4">
      <CardHeader>
        <CardTitle>About us</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
          optio omnis veniam deserunt ut nesciunt error voluptatum cupiditate
          nisi accusantium, adipisci dicta velit dolorem voluptates, quia ipsam
          sed illum impedit.
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutPage;
