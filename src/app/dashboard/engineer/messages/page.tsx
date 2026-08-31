import MessagesView from '@/components/dashboard/MessagesView';

export default function EngineerMessagesPage() {
  return (
    <div className="h-full">
      <MessagesView userRole="engineer" />
    </div>
  );
}
