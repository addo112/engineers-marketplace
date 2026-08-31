import MessagesView from '@/components/dashboard/MessagesView';

export default function CustomerMessagesPage() {
  return (
    <div className="h-full">
      <MessagesView userRole="customer" />
    </div>
  );
}
