import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "./Container";
import Heading from "./Heading";

export function FAQ() {
  return (
    <Container className="">
      <div className="max-w-3xl flex flex-col justify-center mx-auto pb-32 px-6 lg:px-8">
        <div className="mx-auto pb-4">
          <Heading
            as="h2"
            size="lg"
            className=" text-slate-700 font-semibold tracking-tight ">
            FAQ
          </Heading>
        </div>
        <Accordion type="single" collapsible className="w-full mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>Question</AccordionTrigger>
            <AccordionContent>Answer</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Question</AccordionTrigger>
            <AccordionContent>Answer</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Question</AccordionTrigger>
            <AccordionContent>Answer</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Container>
  );
}
