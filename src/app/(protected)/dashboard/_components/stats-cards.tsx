import {
  CalendarIcon,
  DollarSignIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";

import { formatCurrencyInCents } from "@/app/helpers/currency";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsCardsProps {
  totalRevenue: number | null;
  totalAppointments: number;
  totalPatients: number;
  totalDoctors: number;
}

const StatsCards = ({
  totalRevenue,
  totalAppointments,
  totalPatients,
  totalDoctors,
}: StatsCardsProps) => {
  const stats = [
    {
      title: "Faturamento",
      value: totalRevenue ? formatCurrencyInCents(totalRevenue) : "R$ 0,00",
      icon: DollarSignIcon,
    },
    {
      title: "Agendamentos",
      value: totalAppointments.toString(),
      icon: CalendarIcon,
    },
    {
      title: "Pacientes",
      value: totalPatients.toString(),
      icon: UserIcon,
    },
    {
      title: "Médicos",
      value: totalDoctors.toString(),
      icon: UsersIcon,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="gap-0 md:gap-2">
            <CardHeader className="flex flex-row items-center gap-2 space-y-0 px-4 pb-2 md:px-6">
              <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
                <Icon className="text-primary h-4 w-4" />
              </div>
              <CardTitle className="text-muted-foreground text-sm font-medium">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 md:px-6">
              <div className="text-lg font-bold md:text-2xl">{stat.value}</div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default StatsCards;
