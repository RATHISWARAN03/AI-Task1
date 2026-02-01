"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, Send, Sparkles, User, X, Loader } from "lucide-react";
import type { Message } from "@/lib/types";
import { getAIResponse } from "@/lib/actions";
import { cn } from "@/lib/utils";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.hash === "#chatbot") {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "initial",
          text: "Hello! I'm Iron Lady's AI Guide. How can I help you with your leadership journey today?",
          isUser: false,
        },
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
    };
    const loadingMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: "",
      isUser: false,
      isLoading: true,
    };

    setMessages((prev) => [...prev, userMessage, loadingMessage]);
    setInput("");

    const aiResult = await getAIResponse(input);

    const aiMessage: Message = {
      id: (Date.now() + 2).toString(),
      text: aiResult.answer,
      isUser: false,
    };

    setMessages((prev) => [...prev.slice(0, -1), aiMessage]);
  };

  return (
    <>
      <Button
        size="icon"
        onClick={() => setIsOpen(true)}
        aria-label="Open Chat"
        className="
    fixed bottom-6 right-6 z-50
    h-16 w-16 rounded-full
    shadow-2xl
    bg-[linear-gradient(90deg,rgba(131,58,180,1)_0%,rgba(253,29,29,1)_84%,rgba(252,176,69,1)_100%)]
    text-white
    flex items-center justify-center
  "
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </Button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          className="w-full max-w-md flex flex-col p-0 bg-white text-black"
          side="right"
        >
          <SheetHeader className="p-4 border-b">
            <SheetTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#EC277A]" />
              AI Guide
            </SheetTitle>
            <SheetDescription>
              Your Personal Leadership Advisor
            </SheetDescription>
          </SheetHeader>
          <ScrollArea className="flex-1" ref={scrollAreaRef}>
            <div className="p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-start gap-3",
                    message.isUser ? "justify-end " : "justify-start",
                  )}
                >
                  {!message.isUser && (
                    <Avatar className="h-8 w-8 border ">
                      <AvatarFallback className="bg-[#EC277A] text-white">
                        <Sparkles className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "max-w-[80%] rounded-xl p-3 text-sm whitespace-pre-wrap   ",
                      message.isUser ? "bg-[#EC277A] text-white" : "bg-blue-50",
                    )}
                  >
                    {message.isLoading ? (
                      <div className="flex items-center gap-2">
                        <Loader className="h-4 w-4 animate-spin" />
                        <span>Thinking...</span>
                      </div>
                    ) : (
                      message.text
                    )}
                  </div>
                  {message.isUser && (
                    <Avatar className="h-8 w-8 border">
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="p-4 border-t">
            <form
              onSubmit={handleSend}
              className="flex items-center gap-2 border-[#EC277A]"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about leadership..."
                className="flex-1"
                autoComplete="off"
              />
              <Button type="submit" size="icon" aria-label="Send Message">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
