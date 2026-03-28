using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ZaPutevkoi.API.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Hotels",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Stars = table.Column<int>(type: "int", nullable: false),
                    Location = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Rating = table.Column<double>(type: "float", nullable: false),
                    RatingStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DescriptionText = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<int>(type: "int", nullable: false),
                    Currency = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Hotels", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "HotelFilters",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MealPlansJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ServicesJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HotelEntityId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HotelFilters", x => x.Id);
                    table.ForeignKey(
                        name: "FK_HotelFilters_Hotels_HotelEntityId",
                        column: x => x.HotelEntityId,
                        principalTable: "Hotels",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "HotelImages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Path = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HotelEntityId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HotelImages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_HotelImages_Hotels_HotelEntityId",
                        column: x => x.HotelEntityId,
                        principalTable: "Hotels",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "HotelSections",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ItemsJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HotelEntityId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HotelSections", x => x.Id);
                    table.ForeignKey(
                        name: "FK_HotelSections_Hotels_HotelEntityId",
                        column: x => x.HotelEntityId,
                        principalTable: "Hotels",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Accommodations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MaxAdults = table.Column<int>(type: "int", nullable: false),
                    MaxChildren = table.Column<int>(type: "int", nullable: false),
                    MaxGuests = table.Column<int>(type: "int", nullable: false),
                    HotelFiltersEntityId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accommodations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Accommodations_HotelFilters_HotelFiltersEntityId",
                        column: x => x.HotelFiltersEntityId,
                        principalTable: "HotelFilters",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AvailabilityPeriods",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    From = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    To = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HotelFiltersEntityId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AvailabilityPeriods", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AvailabilityPeriods_HotelFilters_HotelFiltersEntityId",
                        column: x => x.HotelFiltersEntityId,
                        principalTable: "HotelFilters",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Accommodations_HotelFiltersEntityId",
                table: "Accommodations",
                column: "HotelFiltersEntityId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AvailabilityPeriods_HotelFiltersEntityId",
                table: "AvailabilityPeriods",
                column: "HotelFiltersEntityId");

            migrationBuilder.CreateIndex(
                name: "IX_HotelFilters_HotelEntityId",
                table: "HotelFilters",
                column: "HotelEntityId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_HotelImages_HotelEntityId",
                table: "HotelImages",
                column: "HotelEntityId");

            migrationBuilder.CreateIndex(
                name: "IX_HotelSections_HotelEntityId",
                table: "HotelSections",
                column: "HotelEntityId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Accommodations");

            migrationBuilder.DropTable(
                name: "AvailabilityPeriods");

            migrationBuilder.DropTable(
                name: "HotelImages");

            migrationBuilder.DropTable(
                name: "HotelSections");

            migrationBuilder.DropTable(
                name: "HotelFilters");

            migrationBuilder.DropTable(
                name: "Hotels");
        }
    }
}
