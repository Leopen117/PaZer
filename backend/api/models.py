from django.db import models




class RunningUnit(models.Model):
    date = models.DateField(auto_now_add=True)
    route_name = models.CharField(max_length=100)
    kilometers = models.FloatField()
    time = models.DateTimeField(auto_now_add=True)
    pace = models.FloatField()


    def __str__(self):
        return f"{self.route_name} - {self.kilometers} km in {self.pace:.2f} min/km"