'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { getCodeFeedback } from '@/ai/flows/code-tutor-feedback';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Sparkles, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  code: z.string().min(10, {
    message: 'Please provide a code snippet of at least 10 characters.',
  }),
});

type FeedbackState = {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string | null;
};

export default function CodeTutor() {
  const [feedback, setFeedback] = useState<FeedbackState>({ type: 'idle', message: null });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: `subnet 192.168.1.0 netmask 255.255.255.0 {\n  range 192.168.1.100 192.168.1.200;\n  option routers 192.168.1.1;\n  option domain-name-servers 8.8.8.8, 8.8.4.4;\n}`,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setFeedback({ type: 'loading', message: null });
    try {
      const result = await getCodeFeedback({
        code: values.code,
        language: 'dhcpd.conf',
        context: 'User is writing a configuration for a simple DHCP server scope.',
      });
      setFeedback({ type: 'success', message: result.feedback });
    } catch (error) {
      console.error('Error getting code feedback:', error);
      setFeedback({ type: 'error', message: 'Failed to get feedback from AI. Please try again.' });
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Code Tutor</CardTitle>
        <CardDescription>Enter your DHCP config snippet below and get instant feedback.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>DHCP Configuration</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your DHCP configuration here..."
                      className="min-h-[150px] font-mono text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             {feedback.type === 'success' && feedback.message && (
                <Alert className="mt-4 border-accent">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <AlertTitle className="text-accent">Feedback Received</AlertTitle>
                  <AlertDescription>
                    <p>{feedback.message}</p>
                  </AlertDescription>
                </Alert>
              )}
              {feedback.type === 'error' && feedback.message && (
                 <Alert variant="destructive" className="mt-4">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{feedback.message}</AlertDescription>
                </Alert>
              )}
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={feedback.type === 'loading'}>
              {feedback.type === 'loading' && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Get Feedback
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
